import { Modal, Table, TableBody, TableHead } from 'flowbite-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaPlus } from 'react-icons/fa';

export default function MyMoviesPage() {
  const [openModal, setOpenModal] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div className="mb-4 col-span-full xl:mb-2">
        <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
          {t('my-movies-title')}
        </h1>
      </div>

      <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <div className="w-full mb-1">
          <div className="sm:flex">
            <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
              <button
                type="button"
                onClick={() => setOpenModal(true)}
                data-modal-toggle="add-user-modal"
                className="inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                <FaPlus className="w-3 h-3 mr-2 -ml-1" />
                {t('my-movies-add-movie')}
              </button>
            </div>
          </div>
        </div>
        <Table striped>
          <TableHead>
            <Table.HeadCell className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
              {t('my-movies-table-title')}
            </Table.HeadCell>
            <Table.HeadCell className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400 hidden md:block">
              {t('my-movies-table-year')}
            </Table.HeadCell>
            <Table.HeadCell className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
              {t('my-movies-table-score')}
            </Table.HeadCell>
            <Table.HeadCell className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400 hidden lg:block">
              {t('my-movies-table-popularity')}
            </Table.HeadCell>
            <Table.HeadCell className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
              <span className="sr-only">{t('common-actions')}</span>
            </Table.HeadCell>
          </TableHead>
          <TableBody>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>Spider-Man</Table.Cell>
              <Table.Cell className="hidden lg:block">2002</Table.Cell>
              <Table.Cell>5</Table.Cell>
              <Table.Cell className="hidden md:block">102</Table.Cell>
              <Table.Cell className="p-4 space-x-2 whitespace-nowrap">
                <a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  {t('common-edit')}
                </a>
                <a className="font-medium text-red-600 dark:text-red-500 hover:underline">
                  {t('common-delete')}
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>Spider-Man 2</Table.Cell>
              <Table.Cell className="hidden lg:block">2004</Table.Cell>
              <Table.Cell>4</Table.Cell>
              <Table.Cell className="hidden md:block">189</Table.Cell>
              <Table.Cell className="p-4 space-x-2 whitespace-nowrap">
                <a
                  onClick={() => setOpenModal(true)}
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  {t('common-edit')}
                </a>
                <a className="font-medium text-red-600 dark:text-red-500 hover:underline">
                  {t('common-delete')}
                </a>
              </Table.Cell>
            </Table.Row>
          </TableBody>
        </Table>
      </div>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>{t('modal-my-movies-title')}</Modal.Header>
        <Modal.Body>
          <form action="">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="movie-title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {t('my-movies-table-title')}
                </label>
                <input
                  type="text"
                  name="movie-title"
                  id="movie-title"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Shrek"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="movie-year"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {t('my-movies-table-year')}
                </label>
                <input
                  type="text"
                  name="movie-year"
                  id="movie-year"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="2015"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="movie-score"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {t('my-movies-table-score')}
                </label>
                <input
                  type="text"
                  name="movie-score"
                  id="movie-score"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="5"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="movie-popularity"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {t('my-movies-table-popularity')}
                </label>
                <input
                  type="text"
                  name="movie-popularity"
                  id="movie-popularity"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="4654"
                  required
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className="flex items-center ml-auto space-x-2 sm:space-x-3">
          <button className="inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            {t('common-save')}
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

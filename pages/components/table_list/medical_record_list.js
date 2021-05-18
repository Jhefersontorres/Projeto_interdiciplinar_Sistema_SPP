export default function RecordList() {
  return (
    <div class="bg-white shadow-md rounded my-6">
      <table class="min-w-max w-full table-auto">
        <thead>
          <tr class="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <th class="py-3 px-6 text-left">Nome do paciente</th>
            <th class="py-3 px-6 text-center">Status</th>
          </tr>
        </thead>
        <tbody class="text-gray-600 text-sm font-light">
          <tr class="border-b border-gray-200 hover:bg-gray-100">
            <td class="py-3 px-6 text-left">
              <div class="flex items-center text-lg">
                <span>Eshal Rosas</span>
              </div>
            </td>
            <td class="py-3 px-6 text-center">
              <span class=" text-red-400 py-1 px-3  text-lg">Solicitado</span>
            </td>
          </tr>
          <tr class="border-b border-gray-200 hover:bg-gray-100">
            <td class="py-3 px-6 text-left">
              <div class="flex items-center text-lg">
                <span>Eshal Rosas</span>
              </div>
            </td>
            <td class="py-3 px-6 text-center">
              <span class=" text-red-400 py-1 px-3  text-lg">Solicitado</span>
            </td>
          </tr>
          <tr class="border-b border-gray-200 hover:bg-gray-100">
            <td class="py-3 px-6 text-left">
              <div class="flex items-center text-lg">
                <span>Eshal Rosas</span>
              </div>
            </td>
            <td class="py-3 px-6 text-center">
              <span class=" text-red-400 py-1 px-3  text-lg">Solicitado</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

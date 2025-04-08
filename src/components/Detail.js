import React, { useEffect, useState } from 'react'
import vanvet from "../images/vanvet.jpg";
import { useParams } from 'react-router-dom';

const Detail = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const data = [{
    id: 'asd1293uasdads1',
    title: 'Recruiting App',
    imageUrl: vanvet,
    type: 'Mobile Apps',
    responsibility: [
      'Mobile Development',
      'UI/UX Design',
    ],
    credit: 'https://dribbble.com/shots/15164950-Recruiting-app',
  }]

  const fetchProduct = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/product/${id}`);
      const data = await res.json()
      console.log(data, 'ddddddddd')
      if (data) setProduct(data || {});
    } catch (error) {
      console.error('error with fetch product: ', error)
    }
  }

  useEffect(() => {
    if (params.id) {
      fetchProduct(params.id);
    }
  }, [params.id]);

  return (
    <section className="container mx-auto my-4 py-4 mt-20">
      <a type="link" href="/product" className="flex w-40 h-8 text-lg items-center ml-4 mt-8 font-light text-gray-400 hover:underline">
        <svg className="w-5 h-5 text-gray-400 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        See All Product
      </a>


      <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">

        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col md:flex-row gap-8 items-start">
          <img src={vanvet} alt="Aluminium Chloride" className="w-64 rounded-lg shadow border" />
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-blue-800">{product.title}</h1>
            <p className="text-gray-700">{product.desc}</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li><span className="font-medium text-gray-800">HSN Code:</span> 28273200</li>
              <li><span className="font-medium text-gray-800">CAS No:</span> 7446-70-0</li>
              <li><span className="font-medium text-gray-800">Manufacturer:</span> <span className="text-blue-600 font-semibold">Gujarat Alkalies and Chemicals Limited</span></li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {product.application?.length > 0 && <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Applications</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              {product.application.map(a => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>}

          {product.packing?.length > 0 && <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Packing</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              {product.packing.map(p => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>}
        </div>

        {product?.specification1?.length > 0 && <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Specifications</h2>
          <div className="overflow-x-auto rounded-md">
            <table className="min-w-full border border-gray-200 text-sm text-left">
              <thead className="bg-blue-100 text-gray-800">
                <tr>
                  <th className="border px-4 py-2">Sr.</th>
                  {Object.keys(product.specification1[0]).map(k => (
                    <th className="border px-4 py-2" key={k}>{k}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {product.specification1.map((sp, idx) => (
                  <tr className="hover:bg-gray-50" key={idx + 'specification-1'}>
                    <td className="border px-4 py-2">{idx + 1}</td>
                    {Object.values(sp).map(v => (
                      <td className="border px-4 py-2" key={v}>{v}</td>
                    ))}
                  </tr>
                ))}

                {/* <tr className="hover:bg-gray-50">
                  <td className="border px-4 py-2">2</td>
                  <td className="border px-4 py-2">Water Insoluble, Max</td>
                  <td className="border px-4 py-2">%</td>
                  <td className="border px-4 py-2">0.05?</td>
                  <td className="border px-4 py-2">0.052</td>
                  <td className="border px-4 py-2">0.01</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border px-4 py-2">3</td>
                  <td className="border px-4 py-2">Non-Volatile, Max</td>
                  <td className="border px-4 py-2">%</td>
                  <td className="border px-4 py-2">0.9</td>
                  <td className="border px-4 py-2">1.4</td>
                  <td className="border px-4 py-2">0.7</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border px-4 py-2">4</td>
                  <td className="border px-4 py-2">Free Aluminium, Max</td>
                  <td className="border px-4 py-2">ppm</td>
                  <td className="border px-4 py-2">50</td>
                  <td className="border px-4 py-2">50</td>
                  <td className="border px-4 py-2">50</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border px-4 py-2">5</td>
                  <td className="border px-4 py-2">Iron as Fe<sub>2</sub>O<sub>3</sub>, Max</td>
                  <td className="border px-4 py-2">ppm</td>
                  <td className="border px-4 py-2">100</td>
                  <td className="border px-4 py-2">50</td>
                  <td className="border px-4 py-2">50</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>}

        {product?.specification2 && <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Specifications</h2>
          <div className="overflow-x-auto rounded-md">
            <table className="min-w-full border border-gray-200 text-sm text-left">
              <thead className="bg-blue-100 text-gray-800">
                <tr>
                  <th className="border px-4 py-2">Sr.</th>
                  <th className="border px-4 py-2">Characteristic</th>
                  <th className="border px-4 py-2" colSpan={3}>Specifications</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {Object.entries(product.specification2).map(([key, value], idx) => (
                  <tr className="hover:bg-gray-50" key={idx + 'specification-1'}>
                    <td className="border px-4 py-2">{idx + 1}</td>
                    <td className="border px-4 py-2">{key}</td>
                    {/* <td className={typeof value === 'string' ? "border px-4 py-2" : ""}>{typeof value === 'string' ? value : value.length ? <tr className='d-flex'>{value.map(v => <td className="border px-4 py-2">{v}</td>)}</tr> : ""}</td> */}
                    {/* <td className="border px-4 py-2">{typeof value === 'string' ? value : value.length ? <div className='d-flex'>{value.map(v => <div className="border px-4 py-2 flex-1">{v}</div>)}</div> : ""}</td> */}
                    {typeof value === 'string' ? <td class="border px-4 py-2" colspan="3">{value}</td> : value.map(v => <td className="border px-4 py-2">{v}</td>)}
                  </tr>
                ))}

                {/* <tr className="hover:bg-gray-50">
                  <td className="border px-4 py-2">2</td>
                  <td className="border px-4 py-2">Water Insoluble, Max</td>
                  <td className="border px-4 py-2">%</td>
                  <td className="border px-4 py-2">0.05?</td>
                  <td className="border px-4 py-2">0.052</td>
                  <td className="border px-4 py-2">0.01</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border px-4 py-2">3</td>
                  <td className="border px-4 py-2">Non-Volatile, Max</td>
                  <td className="border px-4 py-2">%</td>
                  <td className="border px-4 py-2">0.9</td>
                  <td className="border px-4 py-2">1.4</td>
                  <td className="border px-4 py-2">0.7</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border px-4 py-2">4</td>
                  <td className="border px-4 py-2">Free Aluminium, Max</td>
                  <td className="border px-4 py-2">ppm</td>
                  <td className="border px-4 py-2">50</td>
                  <td className="border px-4 py-2">50</td>
                  <td className="border px-4 py-2">50</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border px-4 py-2">5</td>
                  <td className="border px-4 py-2">Iron as Fe<sub>2</sub>O<sub>3</sub>, Max</td>
                  <td className="border px-4 py-2">ppm</td>
                  <td className="border px-4 py-2">100</td>
                  <td className="border px-4 py-2">50</td>
                  <td className="border px-4 py-2">50</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>}

        {/* <div className="flex flex-col mt-16 mb-12 mx-8 sm:mx-16 xl:mx-28">
          <h1 className="text-3xl text-theme-blue font-bold mb-3">
            Project Detail
          </h1>

          <p className="font-light text-lg text-gray-400 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="flex flex-col mx-8 sm:mx-16 xl:mx-28">
          <h1 className="text-3xl text-theme-blue font-bold mb-5">
            Project Responsibilities
          </h1>

          <div className="flex flex-row ml-1">
            {
              product.responsibility?.map((responsibility) => (
                <div className="mr-4 px-6 py-3 text-theme-purple border border-theme-purple rounded-full shadow-lg">
                  {responsibility}
                </div>
              ))
            }
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Detail
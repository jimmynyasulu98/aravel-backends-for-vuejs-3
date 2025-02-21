<script setup lang="ts"> 

definePageMeta({
 
    middleware: ['auth'],
 
  });

import axios from "axios";


  const form = ref({
    membership_number: "",
    payroll_number: "",
    first_name: "",
    last_name: "",
    gender: "",
    marital_status: "",
    location: "",
    date_of_birth: "",
    phone_number_1: "",
    phone_number_2: "",
    email: "",
    nationality: "",
    date_of_application: "",
  })

  interface LoginPayload{
   
    membership_number: string,
    payroll_number: string,
    first_name: string,
    last_name: string,
    gender: string,
    marital_status: string,
    location: string,
    date_of_birth: string,
    phone_number_1: string,
    phone_number_2: string,
    email: string,
    nationality: string,
    date_of_application: string,
  }
 
  async function register_user(payload: LoginPayload) {
    const resp = await axios.post("/users", payload)
    localStorage.storedData = resp.data.data;
    useRouter().push("/me")
  }

  
  const {user} = useAuth();


  const resp = await axios.get('/locations');
  const locations = resp.data
 

   
</script>
<template>
 
 <div class=" p-3">

    <!-- Author: FormBold Team -->
    <div class="w-full max-w-[850px] bg-white">
        <form class="ml-4 " @submit.prevent="register_user(form)">
          <div class=" flex ">
            <div class="first-main-column">   
              <label class="mb-2 block justify-center text-xs font-semibold text-[#60a5fa] sm:text-xl">
                Member Details
              </label>                   
              <div class="flex gap-2" > 
                <div class="mb-1">
                  <label for="membership_number" class="  block text-xs font-medium text-[#07074D]">
                    Membership Number
                  </label>
                  <input type="text"  v-model="form.membership_number" name="membership_number" id="membership_number" placeholder="membership_number"
                      class=" p-1 rounded-md border border-[#e0e0e0] bg-white  text-xs font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
                <div class="mb-1">
                    <label for="payroll_number" class="  block text-xs font-medium text-[#07074D]">
                      Payroll Number 
                    </label>
                    <input type="text"  v-model="form.payroll_number" name="payroll_number" id="payroll_number" placeholder="payroll_number"
                        class=" p-1 rounded-md border border-[#e0e0e0] bg-white  text-xs font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
              </div>

              <div class="flex gap-2" > 
                <div class="mb-1">
                    <label for="first_name" class="  block text-xs font-medium text-[#07074D]">
                        First Name(s)
                    </label>
                    <input type="text"  v-model="form.first_name" name="first_name" id="first_name" placeholder="First Name"
                        class=" p-1 rounded-md border border-[#e0e0e0] bg-white  text-xs font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
                <div class="mb-1">
                    <label for="last_name" class="  block text-xs font-medium text-[#07074D]">
                        Last Name
                    </label>
                    <input type="text"  v-model="form.last_name" name="last_name" id="last_name" placeholder="Last Name"
                        class=" p-1 rounded-md border border-[#e0e0e0] bg-white  text-xs font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
              </div>
               
              <div class="flex gap-2 py-2">
                <label for="gender" class="block text-xs font-medium text-[#07074D] py-2">
                  Gender
                </label>
                <div class="inline-flex  items-center px-3">
                  <label class="ml-2 cursor-pointer text-sm" for="male">Male</label>
                  <label class="relative flex items-center cursor-pointer " for="male">
                    <input name="gender" value="male"  v-model="form.gender" type="radio" class="peer mx-3 h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all" id="male">
                    <span class="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    </span>
                  </label>
                  
                </div>
                <div class="inline-flex items-center px-3">
                  <label class="ml-2 text-slate-600 cursor-pointer text-sm" for="female">Female</label>
                  <label class="relative flex items-center cursor-pointer" for="female">
                    <input name="gender" value="female"   v-model="form.gender" type="radio" class="peer mx-3 h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all" id="female">
                    <span class="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    </span>
                  </label>
                 
                </div>        
              </div>

              <div class="flex gap-2 py-2">
                <label for="marital_status" class="block text-xs font-medium text-[#07074D] py-2">
                  Marital Status
                </label>
                <div class="inline-flex  items-center px-3">
                  <label class="ml-2 cursor-pointer text-sm" for="single">Single</label>
                  <label class="relative flex items-center cursor-pointer " for="single">
                    <input name="marital_status" value="single" v-model="form.marital_status" type="radio" class="peer mx-3 h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all" id="single">
                    <span class="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    </span>
                  </label>
                  
                </div>
                <div class="inline-flex items-center px-3">
                  <label class="ml-2 text-slate-600 cursor-pointer text-sm" for="married">Married</label>
                  <label class="relative flex items-center cursor-pointer" for="married">
                    <input name="marital_status" value="married" v-model="form.marital_status" type="radio" class="peer mx-3 h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all" id="married">
                    <span class="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    </span>
                  </label>
                </div> 
                <div class="inline-flex items-center px-3">
                  <label class="ml-2 text-slate-600 cursor-pointer text-sm" for="other">Other</label>
                  <label class="relative flex items-center cursor-pointer" for="other">
                    <input name="marital_status" value="other" v-model="form.marital_status" type="radio" class="peer mx-3 h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all" id="other">
                    <span class="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    </span>
                  </label>
                </div> 

              </div>
         
              <div class="flex gap-2" > 
                <div class="mb-1">
                    <label for="location" class="  block text-xs font-medium text-[#07074D]">
                      Location
                    </label>
                   
                        <div class="w-full max-w-sm min-w-[200px]">      
                          <div class="relative">
                            <select v-model="form.location"
                                class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-1 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                              <option v-for="(location, index) in locations.data" :key="index" :value="location.id" >{{location.title}}</option>
                            </select>
                           
                            <svg  fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="h-5 w-5 ml-1 absolute top-1 right-2.5 text-slate-700">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                            </svg>
                          </div>
                        </div>
                </div>
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-1">
                    <label for="date" class=" block text-xs font-medium text-[#07074D]">
                        Date of Birth
                    </label>
                    <input type="date" v-model="form.date_of_birth" name="date_of_birth" id="date_of_birth"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-xs font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                  </div>
                </div>
                
              </div>
              <label class="block justify-center text-xs font-semibold text-[#60a5fa] sm:text-xl">
                Contact Details
              </label> 
              <div class="flex gap-2" > 
                <div class="mb-1">
                    <label for="phone_number_1" class="  block text-xs font-medium text-[#07074D]">
                      Phone Number 1
                    </label>
                    <input type="text" v-model="form.phone_number_1" name="phone_number_1" id="phone_number_1" placeholder="Phone Number 1"
                        class=" p-1 rounded-md border border-[#e0e0e0] bg-white  text-xs font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
                <div class="mb-1">
                    <label for="phone_number_2" class="block text-xs font-medium text-[#07074D]">
                      Phone Number 2
                    </label>
                    <input type="text" v-model="form.phone_number_2" name="phone_number_2" id="phone_number_2" placeholder="Phone Number 2"
                        class=" p-1 rounded-md border border-[#e0e0e0] bg-white  text-xs font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
                <div class="mb-1">
                    <label for="email" class="  block text-xs font-medium text-[#07074D]">
                      Email
                    </label>
                    <input type="text" v-model="form.email" name="email" id="email" placeholder="Email"
                        class=" p-1 rounded-md border border-[#e0e0e0] bg-white  text-xs font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
              </div>
            
            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-1">
                      <label for="date_of_application" class=" block text-xs font-medium text-[#07074D]">
                          Date of Application
                      </label>
                      <input type="date" v-model="form.date_of_application" name="date_of_application" id="date_of_application"
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-xs font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                  </div>
              </div>
              <div class="mb-1">
                    <label for="nationality" class="  block text-xs font-medium text-[#07074D]">
                      Nationality
                    </label>
                    <input type="text" v-model="form.nationality" name="nationality" id="nationality" placeholder="nationality"
                        class=" p-1 rounded-md border border-[#e0e0e0] bg-white  text-xs font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
            </div>
           <!--  <div class="mb-2 pt-3">
                <label class="mb-2 block text-xs font-semibold text-[#07074D] sm:text-xl">
                    Address Details
                </label>
                <div class="-mx-3 flex flex-wrap">
                    <div class="w-full px-3 sm:w-1/2">
                        <div class="mb-2">
                            <input type="text" name="area" id="area" placeholder="Enter area"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-xs font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div class="w-full px-3 sm:w-1/2">
                        <div class="mb-2">
                            <input type="text" name="city" id="city" placeholder="Enter city"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-xs font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div class="w-full px-3 sm:w-1/2">
                        <div class="mb-2">
                            <input type="text" name="state" id="state" placeholder="Enter state"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-xs font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div class="w-full px-3 sm:w-1/2">
                        <div class="mb-2">
                            <input type="text" name="post-code" id="post-code" placeholder="Post Code"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-xs font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                </div>
              </div>
             -->
            </div>
          </div>
          <div>
            <button
              type="submit" class="hover:shadow-form w-full rounded-md bg-[#60a5fa] py-3 px-8 text-center text-xs font-semibold text-white outline-none">
                Add Member
            </button> 
            </div>
        </form>
    </div>
</div>
    

</template>
<style>
  input {
    padding-top: 1px;
    height: 4px;
  }
  form{
    max-width: 710px!important;
    
  }
</style>


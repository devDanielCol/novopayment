import axios from "axios";
import { defaultHttpConfig } from "./config";

export const http = axios.create(defaultHttpConfig());

// プロジェクトで使用しないが、バンドルサイズを大きくするためにインポートする例

import * as reactRouter from "react-router-dom"; // ルーティングを必要としない場合でもインポート
import styled from "styled-components"; // スタイリングに別の方法を使う場合でもインポート
import NextApp from "next/app"; // サーバーサイドレンダリングや静的サイト生成をしない場合でもインポート
import { Formik } from "formik"; // フォームを管理しない場合でもインポート
import { useQuery } from "react-query"; // データフェッチングが不要でもインポート
import { LineChart } from "recharts"; // チャートを使用しない場合でもインポート
import { Helmet } from "react-helmet"; // SEO管理をしない場合でもインポート
import { Button } from "antd"; // UIコンポーネントを別のライブラリから使用する場合でもインポート
import { MapContainer } from "leaflet"; // 地図を使用しない場合でもインポート
import { ApolloProvider } from "@apollo/client"; // GraphQLを使用しない場合でもインポート
import { map, filter } from "rxjs/operators"; // リアクティブプログラミングが不要でもインポート
import { graphql } from "gatsby"; // 静的サイトを生成しない場合でもインポート
import { produce } from "immer"; // 不変データ管理をしない場合でもインポート
import { Container } from "semantic-ui-react"; // Semantic UIを使用しない場合でもインポート
import Quill from "quill"; // リッチテキストエディタが不要でもインポート
import Highcharts from "highcharts"; // 高度なチャートを使用しない場合でもインポート
import moment from "moment-timezone"; // タイムゾーン管理が不要でもインポート
import { Button as BootstrapButton } from "react-bootstrap"; // Bootstrapを使用しない場合でもインポート
import { storiesOf } from "@storybook/react"; // Storybookを使用しない場合でもインポート
import { motion } from "framer-motion"; // アニメーションを使用しない場合でもインポート

/**
 * @format
 * @flow
 */

import * as React from 'react';
import Head from 'next/head';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

import BackBar from 'controls/BackBar';
import Item from 'controls/Item';

const H1 = styled.h1`
  font-family: Fira Mono, monospace;
  font-weight: 500;
  font-size: 1.375em;
  letter-spacing: -0.03em;
  margin: 0 0 1em;
`;
const Text = styled.div`
  line-height: 2;
  margin: 0 auto;
  max-width: 700px;
  padding: 0 2em 2em;
`;
const Finale = styled.div`
  text-align: right;
`;

const Home = () => (
  <>
    <Head>
      <title>Политика использования персональных данных в NEXX</title>
    </Head>
    <Global
      styles={css`
        body {
          font-size: 16px;
          margin: 0;
          color: #000000;
          font-family: 'Fira Sans', sans-serif;
          font-display: swap;
        }
      `}
    />
    <BackBar />
    <Text>
      <H1>Согласие на обработку персональных данных</H1>
      <Item>
        <Item>
          Предоставление информации Клиентом:
          <Item>
            При отправке форм и заявок на сайте nt.company (далее -
            &laquo;Сайт&raquo;) Клиент предоставляет следующую информацию:
            фамилия, имя, отчество (по желанию), адрес электронной почты, номер
            телефона. При бронировании объекта недвижимости с целью его
            приобретения Клиент также предоставляет свои паспортные данные:
            серию и номер паспорта, дату выдачи, орган, выдавший паспорт, адрес
            регистрации по месту жительства. Отправляя информацию Подрядчику,
            Клиент подтверждает, что указанная информация не содержит
            персональных данных, касающихся расовой, национальной
            принадлежности, политических взглядов, религиозных или философских
            убеждений, состояния здоровья, интимной жизни.
          </Item>
          <Item>
            Предоставляя свои персональные данные, Клиент соглашается на их
            обработку (вплоть до отзыва Клиентом своего согласия на обработку
            его персональных данных) ООО &laquo;НЕЙРОТЕК&raquo; (далее -
            &laquo;Подрядчик&raquo;), в целях исполнения Подрядчиком и/или его
            партнёрами своих обязательств перед клиентом, продажи товаров и
            предоставления услуг, предоставления справочной информации, а также
            в целях продвижения товаров, работ и услуг, а также соглашается на
            получение сообщений рекламно-информационного характера и сервисных
            сообщений. При обработке персональных данных Клиента Подрядчик
            руководствуется Федеральным законом &laquo;О персональных
            данных&raquo;, Федеральным законом &laquo;О рекламе&raquo; и
            локальными нормативными документами.
            <Item>
              Если Клиент желает уточнения его персональных данных, их
              блокирования или уничтожения в случае, если персональные данные
              являются неполными, устаревшими, неточными, незаконно полученными
              или не являются необходимыми для заявленной цели обработки, либо в
              случае желания клиента отозвать свое согласие на обработку
              персональных данных или устранения неправомерных действий
              Подрядчика в отношении его персональных данных то он должен
              направить официальный запрос Подрядчику.
            </Item>
          </Item>
          <Item>
            Использование информации, предоставленной Клиентом и полученной
            Подрядчиком.
            <Item>
              Подрядчик использует предоставленные Клиентом данные в
              целях:обработки заказов Клиента и для выполнения своих
              обязательств перед Клиентом;для осуществления деятельности по
              продвижению товаров и услуг;оценки и анализа работы
              Сайта;определения победителя в акциях, проводимых
              Подрядчиком;анализа покупательских особенностей Клиента и
              предоставления персональных рекомендаций;информирования Клиента об
              акциях, скидках и специальных предложениях посредством электронных
              и СМС-рассылок.
            </Item>
            <Item>
              Подрядчик вправе направлять Клиенту сообщения
              рекламно-информационного характера. Если Клиент не желает получать
              сообщения рекламно-информационного характера от Подрядчика, он
              должен сообщить об этом Подрядчику по электронной почте по адресу,
              размещённому в разделе &laquo;Контактные данные&raquo; на Сайте. С
              момента получения Подрядчиком указанного сообщения получение
              рассылок Подрядчика возможно в течение 3 дней, что обусловлено
              особенностями работы и взаимодействия информационных систем, а
              также условиями договоров с контрагентами, осуществляющими в
              интересах Подрядчика рассылки сообщений рекламно-информационного
              характера.
            </Item>
          </Item>
        </Item>
        <Item>
          Предоставление и передача информации, полученной Подрядчиком:
          <Item>
            2.1. Подрядчик обязуется не передавать полученную от Клиента
            информацию третьим лицам. Не считается нарушением предоставление
            Подрядчиком информации агентам и третьим лицам, действующим на
            основании договора с Подрядчиком, для исполнения обязательств перед
            Клиентом и только в рамках договоров. Не считается нарушением
            настоящего пункта передача Подрядчиком третьим лицам данных о
            Клиенте в обезличенной форме в целях оценки и анализа работы Сайта,
            анализа покупательских особенностей Клиента и предоставления
            персональных рекомендаций.
          </Item>
          <Item>
            2.2. Не считается нарушением обязательств передача информации в
            соответствии с обоснованными и применимыми требованиями
            законодательства Российской Федерации.
          </Item>
          <Item>
            2.3. Подрядчик вправе использовать технологию &laquo;cookies&raquo;.
            &laquo;Cookies&raquo; не содержат конфиденциальную информацию и не
            передаются третьим лицам.
          </Item>
          <Item>
            2.4. Подрядчик получает информацию об ip-адресе посетителя Сайта и
            сведения о том, по ссылке с какого интернет-сайта посетитель пришел.
            Данная информация не используется для установления личности
            посетителя.
          </Item>
          <Item>
            2.5. Подрядчик не несет ответственности за сведения, предоставленные
            Клиентом на Сайте в общедоступной форме.
          </Item>
          <Item>
            2.6. Подрядчик при обработке персональных данных принимает
            необходимые и достаточные организационные и технические меры для
            защиты персональных данных от неправомерного доступа к ним, а также
            от иных неправомерных действий в отношении персональных данных.
          </Item>
        </Item>
      </Item>
      {/* <ol>
        <li>Предоставление информации Клиентом:</li>
        <ol>
          <li>
            При отправке форм и заявок на сайте nt.company (далее -
            &laquo;Сайт&raquo;) Клиент предоставляет следующую информацию:
            фамилия, имя, отчество (по желанию), адрес электронной почты, номер
            телефона. При бронировании объекта недвижимости с целью его
            приобретения Клиент также предоставляет свои паспортные данные:
            серию и номер паспорта, дату выдачи, орган, выдавший паспорт, адрес
            регистрации по месту жительства. Отправляя информацию Подрядчику,
            Клиент подтверждает, что указанная информация не содержит
            персональных данных, касающихся расовой, национальной
            принадлежности, политических взглядов, религиозных или философских
            убеждений, состояния здоровья, интимной жизни.
          </li>
          <li>
            Предоставляя свои персональные данные, Клиент соглашается на их
            обработку (вплоть до отзыва Клиентом своего согласия на обработку
            его персональных данных) ООО &laquo;НЕЙРОТЕК&raquo; (далее -
            &laquo;Подрядчик&raquo;), в целях исполнения Подрядчиком и/или его
            партнёрами своих обязательств перед клиентом, продажи товаров и
            предоставления услуг, предоставления справочной информации, а также
            в целях продвижения товаров, работ и услуг, а также соглашается на
            получение сообщений рекламно-информационного характера и сервисных
            сообщений. При обработке персональных данных Клиента Подрядчик
            руководствуется Федеральным законом &laquo;О персональных
            данных&raquo;, Федеральным законом &laquo;О рекламе&raquo; и
            локальными нормативными документами.
            <ol>
              <li>
                Если Клиент желает уточнения его персональных данных, их
                блокирования или уничтожения в случае, если персональные данные
                являются неполными, устаревшими, неточными, незаконно
                полученными или не являются необходимыми для заявленной цели
                обработки, либо в случае желания клиента отозвать свое согласие
                на обработку персональных данных или устранения неправомерных
                действий Подрядчика в отношении его персональных данных то он
                должен направить официальный запрос Подрядчику.
              </li>
            </ol>
          </li>
          <li>
            Использование информации, предоставленной Клиентом и полученной
            Подрядчиком.
            <ol>
              <li>
                Подрядчик использует предоставленные Клиентом данные в
                целях:обработки заказов Клиента и для выполнения своих
                обязательств перед Клиентом;для осуществления деятельности по
                продвижению товаров и услуг;оценки и анализа работы
                Сайта;определения победителя в акциях, проводимых
                Подрядчиком;анализа покупательских особенностей Клиента и
                предоставления персональных рекомендаций;информирования Клиента
                об акциях, скидках и специальных предложениях посредством
                электронных и СМС-рассылок.
              </li>
              <li>
                Подрядчик вправе направлять Клиенту сообщения
                рекламно-информационного характера. Если Клиент не желает
                получать сообщения рекламно-информационного характера от
                Подрядчика, он должен сообщить об этом Подрядчику по электронной
                почте по адресу, размещённому в разделе &laquo;Контактные
                данные&raquo; на Сайте. С момента получения Подрядчиком
                указанного сообщения получение рассылок Подрядчика возможно в
                течение 3 дней, что обусловлено особенностями работы и
                взаимодействия информационных систем, а также условиями
                договоров с контрагентами, осуществляющими в интересах
                Подрядчика рассылки сообщений рекламно-информационного
                характера.
              </li>
            </ol>
          </li>
        </ol>
        <li>
          2. Предоставление и передача информации, полученной Подрядчиком:
          <ol>
            <li>
              2.1. Подрядчик обязуется не передавать полученную от Клиента
              информацию третьим лицам. Не считается нарушением предоставление
              Подрядчиком информации агентам и третьим лицам, действующим на
              основании договора с Подрядчиком, для исполнения обязательств
              перед Клиентом и только в рамках договоров. Не считается
              нарушением настоящего пункта передача Подрядчиком третьим лицам
              данных о Клиенте в обезличенной форме в целях оценки и анализа
              работы Сайта, анализа покупательских особенностей Клиента и
              предоставления персональных рекомендаций.
            </li>
            <li>
              2.2. Не считается нарушением обязательств передача информации в
              соответствии с обоснованными и применимыми требованиями
              законодательства Российской Федерации.
            </li>
            <li>
              2.3. Подрядчик вправе использовать технологию
              &laquo;cookies&raquo;. &laquo;Cookies&raquo; не содержат
              конфиденциальную информацию и не передаются третьим лицам.
            </li>
            <li>
              2.4. Подрядчик получает информацию об ip-адресе посетителя Сайта и
              сведения о том, по ссылке с какого интернет-сайта посетитель
              пришел. Данная информация не используется для установления
              личности посетителя.
            </li>
            <li>
              2.5. Подрядчик не несет ответственности за сведения,
              предоставленные Клиентом на Сайте в общедоступной форме.
            </li>
            <li>
              2.6. Подрядчик при обработке персональных данных принимает
              необходимые и достаточные организационные и технические меры для
              защиты персональных данных от неправомерного доступа к ним, а
              также от иных неправомерных действий в отношении персональных
              данных.
            </li>
          </ol>
        </li>
      </ol> */}
      <br />
      <Finale>
        ООО &laquo;НЕЙРОТЕК&raquo;, {new Date().getFullYear()} год
      </Finale>
    </Text>
  </>
);

export default Home;

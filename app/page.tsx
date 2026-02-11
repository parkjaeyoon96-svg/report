import './globals.css'

export default function Home() {
  return (
    <>
      <div className="nav" id="top">
        <a href="#sec1">🎯 전략 & Action</a>
        <a href="#sec2">📊 Executive Summary</a>
        <a href="#sec3">📈 채널분석</a>
        <a href="#sec4">🏷️ 상품/재고</a>
        <a href="#sec5">🏪 매장효율</a>
      </div>

      <div className="wrap">
        <div className="header">
          <div className="headerLeft">
            <h1>🏔️ DISCOVERY 브랜드 2026년 1월 경영 보고서</h1>
            <p>경영관리팀 FP&A | 보고일: 2026년 2월 10일</p>
          </div>
          <div className="headerRight">
            <div className="bigNum">40,811<span>백만원</span></div>
            <div className="sub">실판매출 YoY 104% (사입제외) | 영업이익률 14.0%</div>
          </div>
        </div>

        <div className="pageTitle" id="sec1">1. 전략 & Action Plan - 즉시/단기/중장기 과제</div>

        <div className="container">
          <div className="left">
            <div className="box boxRed">
              <div className="boxTitle red">⚡ 즉시 실행 (1개월 내)</div>
              <ul>
                <li><strong>대리점 매출 역성장 긴급 대응</strong>
                  <ul>
                    <li>대리점 YoY 92% (-8%), 9개 매장 순감, 점당매출 96%로 동반 하락</li>
                    <li>대리점 할인율 18.1%(전년 12.6%, +5.5%p) 급등 → 할인 의존형 매출 탈피</li>
                    <li>대리점 직접이익 YoY 82% (-18%) 수익성 악화 우선 대응</li>
                    <li>조치: 할인율 12% 이하로 즉시 정상화, 저효율 매장 MD 전면 재배치</li>
                  </ul>
                </li>
                <li><strong>과시즌 의류 재고 긴급 소진</strong>
                  <ul>
                    <li>과시즌 의류 매출 YoY 78% (-22%), 재고 92,264백만원(YoY 99%)</li>
                    <li>할인율 48.0%(전년 52.3%)에도 매출 저조 → 소진 전략 전환 필요</li>
                    <li>조치: 아울렛 B2B 전환, 제휴몰 기획전 집중, 2월 말까지 70% 소진 목표</li>
                  </ul>
                </li>
                <li><strong>신발 카테고리 역성장 대응</strong>
                  <ul>
                    <li>매출 YoY 85% (-15%), 직접이익 YoY 72% (-28%) 심각</li>
                    <li>재고 46,409백만원(YoY 83%)으로 축소 중이나 M/U 효율 점검 필요</li>
                    <li>조치: 비효율 SKU 정리, 26SS 발주량 -20% 축소 검토</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="box boxGreen">
              <div className="boxTitle green">🎯 중장기 전략 (상반기)</div>
              <ul>
                <li><strong>채널 포트폴리오 구조 재편</strong>
                  <ul>
                    <li>아울렛 의존도 18.8% → 15% 축소 (직접이익률 29.8% vs 제휴몰 38.3%)</li>
                    <li>제휴몰+자사몰 온라인 비중 16.9% → 22% 확대</li>
                    <li>직영점+면세점 고성장 채널 비중 10.8% → 15% 육성</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="divider" />

        <div className="pageTitle" id="sec2">2. Executive Summary - 핵심 실적, KPI, 주요 이슈 요약</div>

        <div className="section">
          <div className="sectionTitle">📊 핵심 경영 지표</div>
          <div className="kpiGrid">
            <div className="kpiBox">
              <div className="kpiLabel">실판매출 (사입제외)</div>
              <div className="kpiValue">40,811백만원</div>
              <div className="kpiChange up">▲ YoY 104% (+1,423백만원)</div>
            </div>
            <div className="kpiBox">
              <div className="kpiLabel">영업이익</div>
              <div className="kpiValue">5,209백만원</div>
              <div className="kpiChange down">▼ YoY 94% (-348백만원)</div>
            </div>
            <div className="kpiBox">
              <div className="kpiLabel">영업이익률</div>
              <div className="kpiValue">14.0%</div>
              <div className="kpiChange down">▼ -1.5%p (전년 15.5%)</div>
            </div>
            <div className="kpiBox">
              <div className="kpiLabel">할인율</div>
              <div className="kpiValue textRed">23.2%</div>
              <div className="kpiChange down">▼ -0.1%p (전년 23.3%)</div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="left">
            <div className="section">
              <div className="sectionTitle">📈 채널별 실적 요약</div>
              <table>
                <thead>
                  <tr>
                    <th>채널</th>
                    <th className="num">매출</th>
                    <th className="num">YoY</th>
                    <th className="num">이익률</th>
                    <th className="num">비중</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>백화점</td>
                    <td className="num">11,689</td>
                    <td className="num"><span className="badgeUp">103%</span></td>
                    <td className="num">20.0%</td>
                    <td className="num">28.6%</td>
                  </tr>
                  <tr>
                    <td>대리점</td>
                    <td className="num">10,123</td>
                    <td className="num"><span className="badgeDown">92%</span></td>
                    <td className="num">31.8%</td>
                    <td className="num">24.8%</td>
                  </tr>
                  <tr>
                    <td>아울렛</td>
                    <td className="num">7,688</td>
                    <td className="num"><span className="badgeDown">96%</span></td>
                    <td className="num">29.8%</td>
                    <td className="num">18.8%</td>
                  </tr>
                  <tr>
                    <td>제휴몰</td>
                    <td className="num">5,335</td>
                    <td className="num"><span className="badgeUp">116%</span></td>
                    <td className="num">38.3%</td>
                    <td className="num">13.1%</td>
                  </tr>
                  <tr>
                    <td>면세점</td>
                    <td className="num">2,901</td>
                    <td className="num"><span className="badgeUp">157%</span></td>
                    <td className="num">18.6%</td>
                    <td className="num">7.1%</td>
                  </tr>
                  <tr>
                    <td>자사몰</td>
                    <td className="num">1,549</td>
                    <td className="num"><span className="badgeUp">107%</span></td>
                    <td className="num">59.0%</td>
                    <td className="num">3.8%</td>
                  </tr>
                  <tr>
                    <td>직영점</td>
                    <td className="num">1,525</td>
                    <td className="num"><span className="badgeUp">137%</span></td>
                    <td className="num">21.0%</td>
                    <td className="num">3.7%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="footer">
          DISCOVERY 브랜드 2026년 1월 실적 보고서 | F&F Corporation 경영관리팀 FP&A | 데이터 기준: 2026년 1월 실적 (vs 2025년 1월) | 보고 대상: CEO 및 경영진
        </div>
      </div>

      <a href="#top" className="scrollTop">↑</a>
    </>
  )
}


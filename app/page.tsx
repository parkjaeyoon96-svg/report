'use client'

import './globals.css'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // 앵커 링크 클릭 시 부드러운 스크롤 처리
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement
      
      if (link) {
        e.preventDefault()
        const href = link.getAttribute('href')
        if (href && href.startsWith('#')) {
          const id = href.substring(1)
          const element = document.getElementById(id)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

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

            <div className="box boxYellow">
              <div className="boxTitle yellow">📋 단기 실행 (1분기 내)</div>
              <ul>
                <li><strong>직영점·면세점 고성장 모멘텀 확대</strong>
                  <ul>
                    <li>직영점 YoY 137%, 면세점 YoY 157% → 성공 모델 수평 전개</li>
                    <li>직영점 2개 순증(+2개), 점당매출 152백만원(YoY 109%)</li>
                    <li>면세점 관광객 회복세 활용, 고마진 아이템 포트폴리오 강화</li>
                  </ul>
                </li>
                <li><strong>제휴몰 채널 포트폴리오 다변화</strong>
                  <ul>
                    <li>제휴몰 YoY 116%, 비중 13.1%로 성장 중</li>
                    <li>수수료율 24.7%(전년 23.2%, +1.5%p) 상승 → 수수료 재협상 착수</li>
                    <li>자사몰(비중 3.8%) 연계 전환율 확대 전략 수립</li>
                  </ul>
                </li>
                <li><strong>25F 의류 판매율 만회 전략</strong>
                  <ul>
                    <li>당시즌 판매율 44.2%(전년 49.4%, -5.2%p) 저조</li>
                    <li>다운점퍼 46.5%(전년 50.4%), 맨투맨 49.6%(전년 59.9%) 부진</li>
                    <li>조치: 타 채널 이동판매 확대, 온라인 기획전 2월 집중 진행</li>
                  </ul>
                </li>
                <li><strong>원가율 상승 대응</strong>
                  <ul>
                    <li>25FW 생산원가율 24.0%(전년 21.8%, +2.2%p) 상승</li>
                    <li>매출원가율 25.2%(전년 23.3%, +1.9%p) 연동 상승</li>
                    <li>조치: 원부자재 단가 협상, 26SS 원가 목표 22% 이내 설정</li>
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
                <li><strong>상품 기획 프로세스 혁신</strong>
                  <ul>
                    <li>25F M/U 4.22(전년 4.51, -0.29) 하락 → 5.0 이상 목표</li>
                    <li>시즌 4주 후 판매율 30% 미만 품목 발주 50% 감축 원칙 수립</li>
                    <li>ACC 재고주수 기준: 정상 30주/주의 45주/위험 60주+</li>
                  </ul>
                </li>
                <li><strong>모자 카테고리 성장 가속</strong>
                  <ul>
                    <li>모자 매출 YoY 135%, 재고주수 62.5주(전년 96.0주) 대폭 개선</li>
                    <li>ACC 중 가장 빠른 성장 → 비중 확대 및 신제품 출시 주기 단축</li>
                  </ul>
                </li>
                <li><strong>25S 의류 재고 장기 관리</strong>
                  <ul>
                    <li>25S 의류 매출 YoY 50% 반토막, 재고 98,291백만원(YoY 96%)</li>
                    <li>시즌 OFF 재고 장기화 방지 → 비시즌 판매 채널 확보</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="box boxDark">
              <div className="boxTitle" style={{color: 'white'}}>📌 1Q 핵심 KPI 목표</div>
              <table style={{marginTop: '5px', color: 'white', fontSize: '8px'}}>
                <thead>
                  <tr style={{borderBottom: '1px solid #4a5568'}}>
                    <th style={{background: 'transparent', color: '#a0aec0', border: 'none'}}>지표</th>
                    <th className="num" style={{background: 'transparent', color: '#a0aec0', border: 'none'}}>현재</th>
                    <th className="num" style={{background: 'transparent', color: '#a0aec0', border: 'none'}}>목표</th>
                    <th className="num" style={{background: 'transparent', color: '#a0aec0', border: 'none'}}>Gap</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{borderBottom: '1px solid #4a5568'}}>
                    <td style={{color: '#e2e8f0', border: 'none'}}>영업이익률</td>
                    <td className="num" style={{border: 'none'}}>14.0%</td>
                    <td className="num" style={{border: 'none'}}><strong>15.5%</strong></td>
                    <td className="num" style={{border: 'none', color: '#48bb78'}}>+1.5%p</td>
                  </tr>
                  <tr style={{borderBottom: '1px solid #4a5568'}}>
                    <td style={{color: '#e2e8f0', border: 'none'}}>할인율</td>
                    <td className="num" style={{border: 'none'}}>23.2%</td>
                    <td className="num" style={{border: 'none'}}><strong>20.0%</strong></td>
                    <td className="num" style={{border: 'none', color: '#48bb78'}}>-3.2%p</td>
                  </tr>
                  <tr style={{borderBottom: '1px solid #4a5568'}}>
                    <td style={{color: '#e2e8f0', border: 'none'}}>25F 판매율</td>
                    <td className="num" style={{border: 'none'}}>44.2%</td>
                    <td className="num" style={{border: 'none'}}><strong>55%</strong></td>
                    <td className="num" style={{border: 'none', color: '#48bb78'}}>+10.8%p</td>
                  </tr>
                  <tr style={{borderBottom: '1px solid #4a5568'}}>
                    <td style={{color: '#e2e8f0', border: 'none'}}>온라인 비중</td>
                    <td className="num" style={{border: 'none'}}>16.9%</td>
                    <td className="num" style={{border: 'none'}}><strong>22%</strong></td>
                    <td className="num" style={{border: 'none', color: '#48bb78'}}>+5.1%p</td>
                  </tr>
                  <tr style={{borderBottom: '1px solid #4a5568'}}>
                    <td style={{color: '#e2e8f0', border: 'none'}}>25F M/U</td>
                    <td className="num" style={{border: 'none'}}>4.22</td>
                    <td className="num" style={{border: 'none'}}><strong>5.0</strong></td>
                    <td className="num" style={{border: 'none', color: '#48bb78'}}>+0.78</td>
                  </tr>
                  <tr>
                    <td style={{color: '#e2e8f0', border: 'none'}}>대리점 할인율</td>
                    <td className="num" style={{border: 'none'}}>18.1%</td>
                    <td className="num" style={{border: 'none'}}><strong>12%</strong></td>
                    <td className="num" style={{border: 'none', color: '#48bb78'}}>-6.1%p</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="box boxBlue">
              <div className="boxTitle blue">📝 경영진 핵심 메시지</div>
              <div style={{fontSize: '8px', lineHeight: '1.45'}}>
                1월 실판매출 40,811백만원(YoY 104%)으로 전년 대비 성장세 회복 시그널을 보이나, <strong>영업이익률 14.0%(전년 15.5%, -1.5%p)</strong>과 <strong>원가율 상승(+2.2%p)</strong>이 핵심 과제입니다. 
                직영점(+37%)·면세점(+57%)·제휴몰(+16%) 고성장 채널 확대와 동시에, 대리점 역성장(-8%)·아울렛 부진(-4%) 채널의 구조조정이 시급합니다.
                <strong>25F 의류 판매율 44.2%</strong>의 만회와 <strong>대리점 할인율 18.1%</strong> 정상화를 1분기 내 완료하여 연간 목표 달성 기반을 마련해야 합니다.
              </div>
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
            <div className="kpiBox">
              <div className="kpiLabel">직접이익률</div>
              <div className="kpiValue">26.1%</div>
              <div className="kpiChange down">▼ -2.8%p (전년 28.9%)</div>
            </div>
            <div className="kpiBox">
              <div className="kpiLabel">매출원가율</div>
              <div className="kpiValue">25.2%</div>
              <div className="kpiChange down">▲ +1.9%p (전년 23.3%)</div>
            </div>
            <div className="kpiBox">
              <div className="kpiLabel">점당매출</div>
              <div className="kpiValue">124백만원</div>
              <div className="kpiChange up">▲ YoY 104%</div>
            </div>
            <div className="kpiBox">
              <div className="kpiLabel">인당매출</div>
              <div className="kpiValue">397백만원</div>
              <div className="kpiChange up">▲ YoY 115%</div>
            </div>
          </div>
        </div>

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

        <div className="container">
          <div className="left">
            <div className="section">
              <div className="sectionTitle">🏷️ 아이템별 실적 요약</div>
              <table>
                <thead>
                  <tr>
                    <th>카테고리</th>
                    <th className="num">매출</th>
                    <th className="num">YoY</th>
                    <th className="num">비중</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>25F 의류</td>
                    <td className="num">26,359</td>
                    <td className="num"><span className="badgeUp">121%</span></td>
                    <td className="num">64.6%</td>
                  </tr>
                  <tr>
                    <td>과시즌 의류</td>
                    <td className="num">5,926</td>
                    <td className="num"><span className="badgeDown">78%</span></td>
                    <td className="num">14.5%</td>
                  </tr>
                  <tr>
                    <td>가방</td>
                    <td className="num">3,759</td>
                    <td className="num"><span className="badgeDown">92%</span></td>
                    <td className="num">9.2%</td>
                  </tr>
                  <tr>
                    <td>신발</td>
                    <td className="num">2,934</td>
                    <td className="num"><span className="badgeDown">85%</span></td>
                    <td className="num">7.2%</td>
                  </tr>
                  <tr>
                    <td>기타ACC</td>
                    <td className="num">580</td>
                    <td className="num"><span className="badgeUp">115%</span></td>
                    <td className="num">1.4%</td>
                  </tr>
                  <tr>
                    <td>25S 의류</td>
                    <td className="num">529</td>
                    <td className="num"><span className="badgeDown">50%</span></td>
                    <td className="num">1.3%</td>
                  </tr>
                  <tr>
                    <td>모자</td>
                    <td className="num">384</td>
                    <td className="num"><span className="badgeUp">135%</span></td>
                    <td className="num">0.9%</td>
                  </tr>
                  <tr>
                    <td>차기시즌 의류</td>
                    <td className="num">341</td>
                    <td className="num"><span className="badgeDown">62%</span></td>
                    <td className="num">0.8%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="section">
              <div className="sectionTitle">🏪 운영 효율</div>
              <table>
                <thead>
                  <tr>
                    <th>지표</th>
                    <th className="num">실적</th>
                    <th className="num">증감</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>매장수</td>
                    <td className="num">267개</td>
                    <td className="num textRed">-8개</td>
                  </tr>
                  <tr>
                    <td>점당매출</td>
                    <td className="num">124백만</td>
                    <td className="num textGreen">+4%</td>
                  </tr>
                  <tr>
                    <td>인원수</td>
                    <td className="num">103명</td>
                    <td className="num textRed">-11명</td>
                  </tr>
                  <tr>
                    <td>인당매출</td>
                    <td className="num">397백만</td>
                    <td className="num textGreen">+15%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="right">
            <div className="box boxRed">
              <div className="boxTitle red">🔴 Critical Risk</div>
              <ul>
                <li><strong>영업이익률 하락</strong> 14.0%(전년 15.5%, -1.5%p) — 직접이익률 26.1%(-2.8%p) 동반 하락</li>
                <li><strong>대리점 역성장</strong> YoY 92%, 할인율 18.1%(+5.5%p) 급등, 직접이익 -18%</li>
                <li><strong>원가율 상승</strong> 25FW 생산원가율 24.0%(+2.2%p), 매출원가율 25.2%(+1.9%p)</li>
                <li><strong>25F 판매율 저조</strong> 44.2%(전년 49.4%) — 맨투맨 49.6%(전년 59.9%) -10.3%p</li>
                <li><strong>신발·가방 부진</strong> 신발 YoY 85%, 가방 YoY 92% 동반 역성장</li>
              </ul>
            </div>

            <div className="box boxGreen">
              <div className="boxTitle green">🟢 Positive Signal</div>
              <ul>
                <li><strong>직영점 +37%</strong> 신규 2개 매장 개점, 점당매출 152백만원(+9%)</li>
                <li><strong>면세점 +57%</strong> 관광객 회복, 직접이익 YoY 134%</li>
                <li><strong>자사몰 직접이익률 59%</strong> 최고 수익 채널</li>
                <li><strong>모자 카테고리 +35%</strong> 재고주수 62.5주(전년 96.0주, -33.5주) 대폭 개선</li>
                <li><strong>영업비 효율화</strong> YoY 93%(-337백만원), 비용률 12.0%(전년 13.4%, -1.4%p)</li>
                <li><strong>인적 효율</strong> 인원 -11명(-10%)에도 인당매출 +15%</li>
              </ul>
            </div>

            <div className="box boxBlue">
              <div className="boxTitle blue">💡 1월 Key Point</div>
              <ul>
                <li>25F 의류가 1월 매출의 64.6% 차지, YoY 121%로 성장 견인</li>
                <li>면세점 YoY 157%로 최고 성장률 → 관광객 수요 회복 확인</li>
                <li>아울렛 비중 18.8%로 2위이나 YoY 96% → 채널 효율화 필요</li>
                <li>소프트쉘 판매율 52.1%(전년 41.2%, +10.9%p) 호조 → 중경량 아우터 트렌드 확인</li>
                <li>영업비 절감(-7%) 효과가 원가율 상승을 부분 상쇄</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="divider" />

        {/* ========== 3. 채널별 상세 분석 ========== */}
        <div className="pageTitle" id="sec3">3. 채널별 상세 분석 - 고성장 vs 부진 채널, 매장별 기여도 분석</div>

        <div className="container">
          <div className="left">
            <div className="section">
              <div className="sectionTitle">🚀 고성장 채널 분석</div>
              
              <div className="box boxGreen">
                <div className="boxTitle green">면세점: 매출 2,901백만원 (YoY +57%)</div>
                <ul>
                  <li><strong>할인율:</strong> 14.5%(전년 8.9%, +5.6%p) 상승 → 할인 관리 필요</li>
                  <li><strong>직접이익:</strong> 490백만원(YoY 134%), 이익률 18.6%</li>
                  <li><strong>매장:</strong> 4개 유지, 점당매출 725백만원(YoY 157%)</li>
                </ul>
                
                <div style={{fontSize: '8px', fontWeight: 'bold', margin: '6px 0 3px 0'}}>매장별 기여도 분석 (Top5 누적 100%)</div>
                <table style={{marginTop: '2px'}}>
                  <thead>
                    <tr>
                      <th>순위</th>
                      <th>매장명</th>
                      <th className="num">직접이익</th>
                      <th className="num">YoY</th>
                      <th className="num">이익률</th>
                      <th className="num">누적기여도</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="successRow">
                      <td>1위</td>
                      <td>신라면세장충</td>
                      <td className="num">146</td>
                      <td className="num">+209.4%</td>
                      <td className="num">19.7%</td>
                      <td className="num">29.74%</td>
                    </tr>
                    <tr>
                      <td>2위</td>
                      <td>신세계면세명동</td>
                      <td className="num">128</td>
                      <td className="num">-12.7%</td>
                      <td className="num">18.5%</td>
                      <td className="num">55.91%</td>
                    </tr>
                    <tr>
                      <td>3위</td>
                      <td>현대면세무역</td>
                      <td className="num">114</td>
                      <td className="num">N/A</td>
                      <td className="num">21.6%</td>
                      <td className="num">79.08%</td>
                    </tr>
                    <tr>
                      <td>4위</td>
                      <td>신라면세용산</td>
                      <td className="num">103</td>
                      <td className="num">-17.7%</td>
                      <td className="num">15.2%</td>
                      <td className="num">100.0%</td>
                    </tr>
                  </tbody>
                </table>
                
                <div style={{fontSize: '8px', fontWeight: 'bold', margin: '6px 0 3px 0'}}>핵심 인사이트</div>
                <ul style={{marginTop: '2px', fontSize: '7px'}}>
                  <li>성장 엔진의 편중: 신라장충(146백만원, YoY +209.4%) 폭발적 성장이 채널 견인하나 단일 매장 의존도 29.74%로 과도</li>
                  <li>구조적 불안정성: Top4 매장 중 2개(명동 -12.7%, 용산 -17.7%) 역성장하며 지속가능성 의문</li>
                  <li>이익률 격차: 현대무역(21.6%) vs 용산(15.2%)로 6.4%p 차이 발생</li>
                </ul>
              </div>

              <div className="box boxGreen">
                <div className="boxTitle green">직영점: 매출 1,525백만원 (YoY +37%)</div>
                <ul>
                  <li><strong>할인율:</strong> 9.9%(전년 5.2%, +4.7%p) 상승 → 정가 정책 강화 필요</li>
                  <li><strong>직접이익:</strong> 290백만원(YoY 117%), 이익률 21.0%</li>
                  <li><strong>매장:</strong> 전년 대비 +2개(10개), 점당매출 152백만원(YoY 109%)</li>
                </ul>
                
                <div style={{fontSize: '8px', fontWeight: 'bold', margin: '6px 0 3px 0'}}>매장별 기여도 분석 (Top5 누적 135.26%, 적자 왜곡)</div>
                <table style={{marginTop: '2px'}}>
                  <thead>
                    <tr>
                      <th>순위</th>
                      <th>매장명</th>
                      <th className="num">직접이익</th>
                      <th className="num">YoY</th>
                      <th className="num">이익률</th>
                      <th className="num">누적기여도</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1위</td>
                      <td>강남사옥(직)</td>
                      <td className="num">33</td>
                      <td className="num">N/A</td>
                      <td className="num">32.7%</td>
                      <td className="num">70.44%</td>
                    </tr>
                    <tr>
                      <td>2위</td>
                      <td>명동점(직)</td>
                      <td className="num">30</td>
                      <td className="num">N/A</td>
                      <td className="num">9.8%</td>
                      <td className="num">135.26%</td>
                    </tr>
                    <tr>
                      <td>3위</td>
                      <td>스타필드고양(직)</td>
                      <td className="num">56</td>
                      <td className="num">-11.2%</td>
                      <td className="num">28.3%</td>
                      <td className="num">22.83%</td>
                    </tr>
                    <tr>
                      <td>4위</td>
                      <td>스타필드안성(직)</td>
                      <td className="num">45</td>
                      <td className="num">+8.4%</td>
                      <td className="num">28.5%</td>
                      <td className="num">41.43%</td>
                    </tr>
                    <tr className="dangerRow">
                      <td>적자</td>
                      <td>가로수길(직)</td>
                      <td className="num textRed">-16</td>
                      <td className="num">-32.5%</td>
                      <td className="num">-26.8%</td>
                      <td className="num">-35.26%</td>
                    </tr>
                  </tbody>
                </table>
                
                <div style={{fontSize: '8px', fontWeight: 'bold', margin: '6px 0 3px 0'}}>핵심 인사이트</div>
                <ul style={{marginTop: '2px', fontSize: '7px'}}>
                  <li>누적기여도 135.26% 왜곡: 가로수길 적자(-16백만원, -35.26%)로 Top5 합산 시 100% 초과</li>
                  <li>신규 매장의 명암: 강남사옥(이익률 32.7%) 양호 vs 명동(이익률 9.8%) 저조</li>
                  <li>스타필드 매장 부진: 고양(-11.2%), 수원(-18.2%) 모두 역성장</li>
                </ul>
              </div>

              <div className="box boxGreen">
                <div className="boxTitle green">제휴몰: 매출 5,335백만원 (YoY +16%)</div>
                <ul>
                  <li><strong>할인율:</strong> 21.4%(전년 18.7%, +2.7%p) 상승세</li>
                  <li><strong>직접이익:</strong> 1,858백만원(YoY 104%), 이익률 38.3%</li>
                  <li><strong>수수료율:</strong> 24.7%(전년 23.2%, +1.5%p) 소폭 상승</li>
                </ul>
                
                <div style={{fontSize: '8px', fontWeight: 'bold', margin: '6px 0 3px 0'}}>매장별 기여도 분석 (Top5 누적 83.82%)</div>
                <table style={{marginTop: '2px'}}>
                  <thead>
                    <tr>
                      <th>순위</th>
                      <th>매장명</th>
                      <th className="num">직접이익</th>
                      <th className="num">YoY</th>
                      <th className="num">이익률</th>
                      <th className="num">누적기여도</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1위</td>
                      <td>무신사(제휴몰)</td>
                      <td className="num">595</td>
                      <td className="num">-1.5%</td>
                      <td className="num">37.3%</td>
                      <td className="num">32.04%</td>
                    </tr>
                    <tr>
                      <td>2위</td>
                      <td>네이버스토어(제휴몰)</td>
                      <td className="num">536</td>
                      <td className="num">-5.7%</td>
                      <td className="num">37.7%</td>
                      <td className="num">60.87%</td>
                    </tr>
                    <tr className="successRow">
                      <td>3위</td>
                      <td>롯데ON(제휴몰)</td>
                      <td className="num">166</td>
                      <td className="num">+76.9%</td>
                      <td className="num">34.3%</td>
                      <td className="num">69.81%</td>
                    </tr>
                    <tr>
                      <td>4위</td>
                      <td>카카오선물하기(제휴몰)</td>
                      <td className="num">150</td>
                      <td className="num">-0.1%</td>
                      <td className="num">52.6%</td>
                      <td className="num">77.86%</td>
                    </tr>
                    <tr>
                      <td>5위</td>
                      <td>29CM(제휴몰)</td>
                      <td className="num">111</td>
                      <td className="num">-11.8%</td>
                      <td className="num">38.4%</td>
                      <td className="num">83.82%</td>
                    </tr>
                  </tbody>
                </table>
                
                <div style={{fontSize: '8px', fontWeight: 'bold', margin: '6px 0 3px 0'}}>핵심 인사이트</div>
                <ul style={{marginTop: '2px', fontSize: '7px'}}>
                  <li>양대 플랫폼 의존도 60.87%: 무신사(595백만원, 32.04%) + 네이버(536백만원, 28.83%) 모두 역성장</li>
                  <li>롯데ON 폭발적 성장: 166백만원(YoY +76.9%)으로 3위 진입, 성장세 지속 시 구조 변화 가능</li>
                  <li>카카오 선물하기 고이익률: 이익률 52.6%로 제휴몰 중 최고</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="section">
              <div className="sectionTitle">📉 부진 채널 분석</div>
              
              <div className="box boxRed">
                <div className="boxTitle red">대리점: 매출 10,123백만원 (YoY -8%)</div>
                <ul>
                  <li><strong>할인율:</strong> 18.1%(전년 12.6%, +5.5%p) — 전 채널 최대 상승폭</li>
                  <li><strong>직접이익:</strong> 2,927백만원(YoY 82%, -18%), 이익률 31.8%</li>
                  <li><strong>매장:</strong> -9개(122개), 점당매출 77백만원(YoY 96%) 동반 하락</li>
                  <li><strong>유통수수료:</strong> 33.4%(전년 34.1%, -0.7%p) 소폭 개선</li>
                </ul>
                
                <div style={{fontSize: '8px', fontWeight: 'bold', margin: '6px 0 3px 0'}}>매장별 기여도 분석 (Top5 누적 11.0%, 분산 안정)</div>
                <table style={{marginTop: '2px'}}>
                  <thead>
                    <tr>
                      <th>순위</th>
                      <th>매장명</th>
                      <th className="num">직접이익</th>
                      <th className="num">YoY</th>
                      <th className="num">이익률</th>
                      <th className="num">누적기여도</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1위</td>
                      <td>LF스퀘어양주(대-위)</td>
                      <td className="num">89</td>
                      <td className="num">-6.6%</td>
                      <td className="num">32.6%</td>
                      <td className="num">3.03%</td>
                    </tr>
                    <tr>
                      <td>2위</td>
                      <td>모다경주(대-위)</td>
                      <td className="num">80</td>
                      <td className="num">-19.5%</td>
                      <td className="num">32.0%</td>
                      <td className="num">5.77%</td>
                    </tr>
                    <tr className="successRow">
                      <td>3위</td>
                      <td>순천연향(대-위)</td>
                      <td className="num">54</td>
                      <td className="num">+67.1%</td>
                      <td className="num">33.5%</td>
                      <td className="num">7.60%</td>
                    </tr>
                    <tr>
                      <td>4위</td>
                      <td>퍼스트빌리지(대-위)</td>
                      <td className="num">52</td>
                      <td className="num">-6.2%</td>
                      <td className="num">30.1%</td>
                      <td className="num">9.37%</td>
                    </tr>
                    <tr>
                      <td>5위</td>
                      <td>현대가든파이브(상-위)</td>
                      <td className="num">48</td>
                      <td className="num">+11.0%</td>
                      <td className="num">36.6%</td>
                      <td className="num">11.0%</td>
                    </tr>
                  </tbody>
                </table>
                
                <div style={{fontSize: '8px', fontWeight: 'bold', margin: '6px 0 3px 0'}}>핵심 인사이트</div>
                <ul style={{marginTop: '2px', fontSize: '7px'}}>
                  <li>가장 분산된 포트폴리오: Top5 누적 기여도 11.0%로 최저, 안정적 구조</li>
                  <li>순천연향 돌풍: 54백만원(YoY +67.1%)으로 3위 진입</li>
                  <li>상위권 정체: 양주(-6.6%), 경주(-19.5%) 등 Top3 중 2곳 역성장</li>
                </ul>
              </div>

              <div className="box boxYellow">
                <div className="boxTitle yellow">아울렛: 매출 7,688백만원 (YoY -4%)</div>
                <ul>
                  <li><strong>할인율:</strong> 32.2%(전년 36.0%, -3.8%p) 개선 중</li>
                  <li><strong>직접이익:</strong> 2,082백만원(YoY 89%, -11%), 이익률 29.8%</li>
                  <li><strong>매장:</strong> 38개(+1개), 점당매출 202백만원(YoY 94%) 하락</li>
                </ul>
                
                <div style={{fontSize: '8px', fontWeight: 'bold', margin: '6px 0 3px 0'}}>매장별 기여도 분석 (Top5 누적 26.35%)</div>
                <table style={{marginTop: '2px'}}>
                  <thead>
                    <tr>
                      <th>순위</th>
                      <th>매장명</th>
                      <th className="num">직접이익</th>
                      <th className="num">YoY</th>
                      <th className="num">이익률</th>
                      <th className="num">누적기여도</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="warnRow">
                      <td>1위</td>
                      <td>팩토리이천(직)</td>
                      <td className="num">92</td>
                      <td className="num">-18.5%</td>
                      <td className="num">60.1%</td>
                      <td className="num">4.42%</td>
                    </tr>
                    <tr>
                      <td>2위</td>
                      <td>신세계아울렛시흥(직)</td>
                      <td className="num">242</td>
                      <td className="num">-8.3%</td>
                      <td className="num">44.7%</td>
                      <td className="num">15.64%</td>
                    </tr>
                    <tr className="successRow">
                      <td>3위</td>
                      <td>신세계아울렛파주(직)</td>
                      <td className="num">169</td>
                      <td className="num">+10.1%</td>
                      <td className="num">46.6%</td>
                      <td className="num">23.76%</td>
                    </tr>
                    <tr className="warnRow">
                      <td>4위</td>
                      <td>롯데아울렛김해(직)</td>
                      <td className="num">152</td>
                      <td className="num">-23.1%</td>
                      <td className="num">35.6%</td>
                      <td className="num">31.06%</td>
                    </tr>
                    <tr>
                      <td>5위</td>
                      <td>현대아울렛김포(직)</td>
                      <td className="num">143</td>
                      <td className="num">-4.6%</td>
                      <td className="num">44.2%</td>
                      <td className="num">37.93%</td>
                    </tr>
                  </tbody>
                </table>
                
                <div style={{fontSize: '8px', fontWeight: 'bold', margin: '6px 0 3px 0'}}>핵심 인사이트</div>
                <ul style={{marginTop: '2px', fontSize: '7px'}}>
                  <li>팩토리이천 급락: YoY -18.5%로 채널 전반 리스크 신호, 높은 이익률(60.1%)에도 매출 감소가 수익성 상쇄</li>
                  <li>중위권 양극화 심화: 파주 +10.1% 성장 vs 김해 -23.1% 급락, 시흥은 매출 규모 최대(242백만원)이나 YoY -8.3%</li>
                  <li>이익률 구조 양호: Top5 평균 이익률 46.8%로 고수익 구조 유지</li>
                </ul>
              </div>

              <div className="box boxYellow">
                <div className="boxTitle yellow">백화점: 매출 11,689백만원 (YoY +3%)</div>
                <ul>
                  <li><strong>할인율:</strong> 25.4%(전년 27.4%, -2.0%p) 개선세</li>
                  <li><strong>직접이익:</strong> 2,126백만원(YoY 91%, -9%), 이익률 20.0%</li>
                  <li><strong>매장:</strong> 93개(-2개), 점당매출 126백만원(YoY 106%) 소폭 개선</li>
                  <li><strong>유통수수료:</strong> 33.4%(전년 32.9%, +0.5%p) 소폭 상승</li>
                </ul>
                
                <div style={{fontSize: '8px', fontWeight: 'bold', margin: '6px 0 3px 0'}}>매장별 기여도 분석 (Top5 누적 20.02%, 분산 안정)</div>
                <table style={{marginTop: '2px'}}>
                  <thead>
                    <tr>
                      <th>순위</th>
                      <th>매장명</th>
                      <th className="num">직접이익</th>
                      <th className="num">YoY</th>
                      <th className="num">이익률</th>
                      <th className="num">누적기여도</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="successRow">
                      <td>1위</td>
                      <td>신세계강남</td>
                      <td className="num">185</td>
                      <td className="num">+22.1%</td>
                      <td className="num">31.1%</td>
                      <td className="num">5.57%</td>
                    </tr>
                    <tr className="successRow">
                      <td>2위</td>
                      <td>롯데잠실</td>
                      <td className="num">164</td>
                      <td className="num">+24.2%</td>
                      <td className="num">29.3%</td>
                      <td className="num">10.51%</td>
                    </tr>
                    <tr>
                      <td>3위</td>
                      <td>롯데인천</td>
                      <td className="num">122</td>
                      <td className="num">+1.7%</td>
                      <td className="num">29.0%</td>
                      <td className="num">14.17%</td>
                    </tr>
                    <tr>
                      <td>4위</td>
                      <td>마리오구로</td>
                      <td className="num">99</td>
                      <td className="num">-7.2%</td>
                      <td className="num">45.2%</td>
                      <td className="num">17.16%</td>
                    </tr>
                    <tr>
                      <td>5위</td>
                      <td>신세계대구</td>
                      <td className="num">95</td>
                      <td className="num">+0.7%</td>
                      <td className="num">31.0%</td>
                      <td className="num">20.02%</td>
                    </tr>
                  </tbody>
                </table>
                
                <div style={{fontSize: '8px', fontWeight: 'bold', margin: '6px 0 3px 0'}}>핵심 인사이트</div>
                <ul style={{marginTop: '2px', fontSize: '7px'}}>
                  <li>이상적 분산 구조: Top5 누적 기여도 20.02%로 전 채널 중 가장 낮음, 안정적 포트폴리오</li>
                  <li>강남·잠실 양대 성장: 신세계강남(+22.1%) + 롯데잠실(+24.2%) 20%대 고성장</li>
                  <li>마리오구로 고이익률: 이익률 45.2%로 백화점 평균(30.5%)보다 14.7%p 높으나 YoY -7.2% 역성장</li>
                </ul>
              </div>

              <div className="box boxBlue">
                <div className="boxTitle blue">자사몰: 매출 1,549백만원 (YoY +7%)</div>
                <ul>
                  <li><strong>할인율:</strong> 17.5%(전년 18.7%, -1.2%p)</li>
                  <li><strong>직접이익:</strong> 831백만원(YoY 103%), 이익률 59.0%</li>
                </ul>
                
                <div style={{fontSize: '8px', fontWeight: 'bold', margin: '6px 0 3px 0'}}>매장별 기여도 분석 (Top5 누적 100%, 초집중)</div>
                <table style={{marginTop: '2px'}}>
                  <thead>
                    <tr>
                      <th>순위</th>
                      <th>매장명</th>
                      <th className="num">직접이익</th>
                      <th className="num">YoY</th>
                      <th className="num">이익률</th>
                      <th className="num">누적기여도</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="highlightRow">
                      <td>1위</td>
                      <td>온라인쇼핑몰(직)</td>
                      <td className="num">829</td>
                      <td className="num">+2.6%</td>
                      <td className="num">59.0%</td>
                      <td className="num">99.77%</td>
                    </tr>
                    <tr>
                      <td>2위</td>
                      <td>Discovery 쇼피파이</td>
                      <td className="num">2</td>
                      <td className="num">N/A</td>
                      <td className="num">68.5%</td>
                      <td className="num">100.0%</td>
                    </tr>
                  </tbody>
                </table>
                
                <div style={{fontSize: '8px', fontWeight: 'bold', margin: '6px 0 3px 0'}}>핵심 인사이트</div>
                <ul style={{marginTop: '2px', fontSize: '7px'}}>
                  <li>단일 매장 절대 의존: 온라인쇼핑몰(직) 829백만원이 채널의 99.77% 차지하는 극단적 구조</li>
                  <li>안정적 수익성: 이익률 59.0%로 전 채널 최고 수준이며 YoY +2.6% 꾸준한 성장</li>
                  <li>글로벌 시장 초기 진입: Discovery 쇼피파이(2백만원, 이익률 68.5%) 신규 개설</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section" style={{marginTop: '10px'}}>
          <div className="sectionTitle">🌐 온라인 채널 수익구조 비교</div>
          <table>
            <thead>
              <tr>
                <th>구분</th>
                <th className="num">자사몰</th>
                <th className="num">제휴몰</th>
                <th className="num">격차</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>매출액</td>
                <td className="num">1,549</td>
                <td className="num">5,335</td>
                <td className="num">3.4배</td>
              </tr>
              <tr>
                <td>매출성장률</td>
                <td className="num"><span className="badgeUp">+7%</span></td>
                <td className="num"><span className="badgeUp">+16%</span></td>
                <td className="num">-9%p</td>
              </tr>
              <tr>
                <td>직접이익</td>
                <td className="num">831</td>
                <td className="num">1,858</td>
                <td className="num">2.2배</td>
              </tr>
              <tr className="highlightRow">
                <td><strong>직접이익률</strong></td>
                <td className="num"><strong>59.0%</strong></td>
                <td className="num">38.3%</td>
                <td className="num textGreen"><strong>+20.7%p</strong></td>
              </tr>
              <tr>
                <td>할인율</td>
                <td className="num">17.5%</td>
                <td className="num">21.4%</td>
                <td className="num textGreen">-3.9%p</td>
              </tr>
            </tbody>
          </table>
          <div className="insightBox">
            <div className="insightTitle">💡 인사이트</div>
            <span style={{fontSize: '8px'}}>자사몰은 유통수수료 부담 없이 직접이익률 59.0% 달성. 비중 3.8%이나 매출 10% 증가 시 직접이익 +90백만원 레버리지. 자사몰 신규 고객 유입 마케팅 투자가 수익성 개선의 핵심 레버.</span>
          </div>
        </div>

        <hr className="divider" />

        {/* ========== 4. 상품/재고 분석 ========== */}
        <div className="pageTitle" id="sec4">4. 상품/재고 분석 - 아이템별 성과, 시즌 판매율, 재고 리스크, 원가율 분석</div>

        <div className="container">
          <div className="left">
            <div className="section">
              <div className="sectionTitle">📊 25FW/25N TOP10 상품 매출·발주·재고 분석</div>
              
              <div className="box boxBlue">
                <div className="boxTitle blue">25FW 의류 (패딩 중심) - 총 44,235백만원</div>
                <table style={{marginTop: '4px'}}>
                  <thead>
                    <tr>
                      <th>순위</th>
                      <th>상품명</th>
                      <th className="num">매출</th>
                      <th className="num">판매율</th>
                      <th className="num">재고</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="successRow">
                      <td>1</td>
                      <td>남성 레스터G 숏패딩</td>
                      <td className="num">7,448</td>
                      <td className="num"><strong>78.5%</strong></td>
                      <td className="num">2,210</td>
                    </tr>
                    <tr className="warnRow">
                      <td>2</td>
                      <td>여성 레스터G 롱패딩</td>
                      <td className="num">7,427</td>
                      <td className="num">41.4%</td>
                      <td className="num textRed"><strong>11,131</strong></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>여성 켈리 롱패딩</td>
                      <td className="num">3,995</td>
                      <td className="num">56.9%</td>
                      <td className="num">4,092</td>
                    </tr>
                    <tr className="warnRow">
                      <td>4</td>
                      <td>유니 반슬리 숏패딩</td>
                      <td className="num">3,837</td>
                      <td className="num">48.8%</td>
                      <td className="num">5,375</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>여성 레스터G 숏패딩</td>
                      <td className="num">3,578</td>
                      <td className="num">65.9%</td>
                      <td className="num">2,421</td>
                    </tr>
                  </tbody>
                </table>
                <ul style={{marginTop: '5px', fontSize: '7px'}}>
                  <li><strong>패딩 집중:</strong> TOP10 전원 패딩 카테고리, 신규 상품 매출 상위 차지</li>
                  <li><strong>재고 부담:</strong> 2위 여성 레스터G 롱패딩 재고 11,131백만원(판매율 41.4%)</li>
                  <li><strong>롱 vs 숏:</strong> 남성 롱(46.2%) vs 숏(78.5%) 판매율 32.3%p 격차</li>
                </ul>
              </div>

              <div className="box boxYellow">
                <div className="boxTitle yellow">25N ACC (백팩 중심) - 총 16,118백만원</div>
                <table style={{marginTop: '4px'}}>
                  <thead>
                    <tr>
                      <th>순위</th>
                      <th>상품명</th>
                      <th className="num">매출</th>
                      <th className="num">YoY</th>
                      <th className="num">재고주수</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="warnRow">
                      <td>1</td>
                      <td>라이크 에어 플로 백팩</td>
                      <td className="num">2,882</td>
                      <td className="num">-14.4%</td>
                      <td className="num">47.5주</td>
                    </tr>
                    <tr className="dangerRow">
                      <td>2</td>
                      <td>라이크 에어 시프트 백팩</td>
                      <td className="num">2,766</td>
                      <td className="num"><strong>-45.4%</strong></td>
                      <td className="num">17.0주</td>
                    </tr>
                    <tr className="dangerRow">
                      <td>3</td>
                      <td>웨이브 제인</td>
                      <td className="num">2,292</td>
                      <td className="num">신규</td>
                      <td className="num textRed"><strong>531.1주</strong></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>라이크 에어 트와인 백팩</td>
                      <td className="num">1,751</td>
                      <td className="num">-5.6%</td>
                      <td className="num">36.0주</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>라이크 에어 매티스 백팩</td>
                      <td className="num">1,679</td>
                      <td className="num">-15.5%</td>
                      <td className="num">43.4주</td>
                    </tr>
                  </tbody>
                </table>
                <ul style={{marginTop: '5px', fontSize: '7px'}}>
                  <li><strong>전년 대비 부진:</strong> 발주·매출 동반 감소(-15~45%)</li>
                  <li><strong>신규 상품 과다 발주:</strong> 웨이브 제인 재고주수 531.1주(이상치)</li>
                  <li><strong>라이크 에어:</strong> 7개 시리즈 중 시프트 백팩 -45.4% 급락</li>
                </ul>
              </div>
            </div>

            <div className="section">
              <div className="sectionTitle">📈 25F 의류 시즌 판매율 & M/U</div>
              <div className="grid2">
                <div className="kpiBox">
                  <div className="kpiLabel">당시즌 판매율</div>
                  <div className="kpiValue textRed">44.2%</div>
                  <div className="kpiChange down">전년 49.4% (-5.2%p)</div>
                </div>
                <div className="kpiBox">
                  <div className="kpiLabel">25F M/U</div>
                  <div className="kpiValue">4.22</div>
                  <div className="kpiChange down">전년 4.51 (-0.29)</div>
                </div>
              </div>
              <table style={{marginTop: '6px'}}>
                <thead>
                  <tr>
                    <th>아이템</th>
                    <th className="num">판매율</th>
                    <th className="num">전년</th>
                    <th className="num">M/U</th>
                    <th className="num">전년</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="successRow">
                    <td><strong>소프트쉘</strong></td>
                    <td className="num"><strong>52.1%</strong></td>
                    <td className="num">41.2%</td>
                    <td className="num">-</td>
                    <td className="num">-</td>
                  </tr>
                  <tr>
                    <td>맨투맨</td>
                    <td className="num">49.6%</td>
                    <td className="num">59.9%</td>
                    <td className="num">-</td>
                    <td className="num">-</td>
                  </tr>
                  <tr>
                    <td>다운점퍼</td>
                    <td className="num">46.5%</td>
                    <td className="num">50.4%</td>
                    <td className="num">4.19</td>
                    <td className="num">4.46</td>
                  </tr>
                  <tr>
                    <td>트레이닝(하의)</td>
                    <td className="num">38.9%</td>
                    <td className="num">41.6%</td>
                    <td className="num">4.65</td>
                    <td className="num">4.72</td>
                  </tr>
                  <tr className="dangerRow">
                    <td>트레이닝(상의)</td>
                    <td className="num">35.8%</td>
                    <td className="num">40.4%</td>
                    <td className="num">4.31</td>
                    <td className="num">4.63</td>
                  </tr>
                  <tr className="dangerRow">
                    <td><strong>방풍자켓</strong></td>
                    <td className="num">-</td>
                    <td className="num">-</td>
                    <td className="num"><strong>3.65</strong></td>
                    <td className="num">4.29</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="section">
              <div className="sectionTitle">🏭 ACC 재고주수 현황</div>
              <table>
                <thead>
                  <tr>
                    <th>카테고리</th>
                    <th className="num">당해</th>
                    <th className="num">전년</th>
                    <th className="num">증감</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="totalRow">
                    <td>전체 ACC</td>
                    <td className="num">41.9주</td>
                    <td className="num">47.2주</td>
                    <td className="num textGreen">-5.3주</td>
                  </tr>
                  <tr>
                    <td>기타ACC</td>
                    <td className="num">23.5주</td>
                    <td className="num">33.0주</td>
                    <td className="num textGreen">-9.5주</td>
                  </tr>
                  <tr>
                    <td>가방</td>
                    <td className="num">34.6주</td>
                    <td className="num">36.8주</td>
                    <td className="num textGreen">-2.2주</td>
                  </tr>
                  <tr>
                    <td>신발</td>
                    <td className="num">51.4주</td>
                    <td className="num">56.6주</td>
                    <td className="num textGreen">-5.2주</td>
                  </tr>
                  <tr className="successRow">
                    <td><strong>모자</strong></td>
                    <td className="num"><strong>62.5주</strong></td>
                    <td className="num">96.0주</td>
                    <td className="num textGreen"><strong>-33.5주</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="right">
            <div className="section">
              <div className="sectionTitle">💰 채널x중분류 교차분석 (성장 TOP20)</div>
              <table>
                <thead>
                  <tr>
                    <th>채널</th>
                    <th>중분류</th>
                    <th className="num">매출</th>
                    <th className="num">증감률</th>
                    <th className="num">할인율</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="successRow">
                    <td>면세점</td>
                    <td><strong>Outer</strong></td>
                    <td className="num">2,392</td>
                    <td className="num"><strong>+83.1%</strong></td>
                    <td className="num">12.3%</td>
                  </tr>
                  <tr className="successRow">
                    <td>제휴몰</td>
                    <td>Outer</td>
                    <td className="num">3,403</td>
                    <td className="num">+21.4%</td>
                    <td className="num">18.4%</td>
                  </tr>
                  <tr className="successRow">
                    <td>직영점</td>
                    <td>Outer</td>
                    <td className="num">1,176</td>
                    <td className="num">+55.9%</td>
                    <td className="num">10.2%</td>
                  </tr>
                  <tr>
                    <td>백화점</td>
                    <td>Bag</td>
                    <td className="num">1,647</td>
                    <td className="num">+12.8%</td>
                    <td className="num">21.5%</td>
                  </tr>
                  <tr>
                    <td>제휴몰</td>
                    <td>Shoes</td>
                    <td className="num">684</td>
                    <td className="num">+12.8%</td>
                    <td className="num">25.1%</td>
                  </tr>
                </tbody>
              </table>
              <ul style={{marginTop: '5px', fontSize: '7px'}}>
                <li><strong>Outer 주도:</strong> TOP20 중 7개 항목, 총 3,034백만원 증가</li>
                <li><strong>면세점 Outer:</strong> 할인율 7.1%p 상승에도 83.1% 성장</li>
                <li><strong>12월 스파이크:</strong> 20개 중 15개 항목이 연말 집중 판매 패턴</li>
              </ul>
            </div>

            <div className="section">
              <div className="sectionTitle">🏭 25FW 시즌별 원가율 분석 (매출비중 포함)</div>
              
              <table>
                <thead>
                  <tr>
                    <th>카테고리</th>
                    <th className="num">원가율</th>
                    <th className="num">증감</th>
                    <th className="num">매출비중</th>
                    <th className="num">TAG단가</th>
                    <th className="num">평균원가</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="totalRow">
                    <td>전체</td>
                    <td className="num">23.7%</td>
                    <td className="num textRed">+1.5%p</td>
                    <td className="num">100%</td>
                    <td className="num">101%</td>
                    <td className="num">107%</td>
                  </tr>
                  <tr className="warnRow">
                    <td><strong>OUTER</strong></td>
                    <td className="num"><strong>24.1%</strong></td>
                    <td className="num textRed"><strong>+1.7%p</strong></td>
                    <td className="num"><strong>58.6%</strong></td>
                    <td className="num">105%</td>
                    <td className="num">112%</td>
                  </tr>
                  <tr className="warnRow">
                    <td>INNER</td>
                    <td className="num">22.0%</td>
                    <td className="num textRed">+1.5%p</td>
                    <td className="num">27.1%</td>
                    <td className="num">98%</td>
                    <td className="num">105%</td>
                  </tr>
                  <tr className="successRow">
                    <td>BOTTOM</td>
                    <td className="num">21.3%</td>
                    <td className="num textGreen">-0.1%p</td>
                    <td className="num">13.9%</td>
                    <td className="num">108%</td>
                    <td className="num">108%</td>
                  </tr>
                </tbody>
              </table>

              <div className="box boxRed" style={{marginTop: '7px'}}>
                <div className="boxTitle red">⚠️ 원가 상승 세부 요인</div>
                <table style={{marginTop: '4px'}}>
                  <thead>
                    <tr>
                      <th>원가 구성</th>
                      <th className="num">당해</th>
                      <th className="num">전년</th>
                      <th className="num">증감</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="dangerRow">
                      <td><strong>원부자재</strong></td>
                      <td className="num">15.8%</td>
                      <td className="num">14.4%</td>
                      <td className="num textRed"><strong>+1.4%p</strong></td>
                    </tr>
                    <tr>
                      <td>공임</td>
                      <td className="num">4.6%</td>
                      <td className="num">4.5%</td>
                      <td className="num textRed">+0.1%p</td>
                    </tr>
                    <tr>
                      <td>마진</td>
                      <td className="num">2.4%</td>
                      <td className="num">2.3%</td>
                      <td className="num textRed">+0.1%p</td>
                    </tr>
                  </tbody>
                </table>
                <ul style={{marginTop: '5px', fontSize: '7px'}}>
                  <li><strong>핵심:</strong> 원부자재비 +1.4%p가 원가 상승의 93% 차지</li>
                  <li><strong>OUTER:</strong> 원부자재 16.4%(+1.5%p) — 다운·기능성 원단 가격↑</li>
                  <li><strong>대응:</strong> TAG 인상(+1%) &lt; 원가 상승(+7%) → 마진 압박</li>
                </ul>
              </div>
            </div>

            <div className="section">
              <div className="sectionTitle">🏷️ 25FW/25N 할인율 TOP20 아이템</div>
              <table>
                <thead>
                  <tr>
                    <th>상품명</th>
                    <th className="num">매출</th>
                    <th className="num">할인율</th>
                    <th>주력채널</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="dangerRow">
                    <td>유니 픽토르U 다운 경</td>
                    <td className="num">224</td>
                    <td className="num"><strong>36.1%</strong></td>
                    <td>백화점 76.3%</td>
                  </tr>
                  <tr>
                    <td>남성 베르텍스 방수 자켓</td>
                    <td className="num">82</td>
                    <td className="num">32.5%</td>
                    <td>대리점 87.9%</td>
                  </tr>
                  <tr>
                    <td>덴버 기모 후드티</td>
                    <td className="num">98</td>
                    <td className="num">31.8%</td>
                    <td>백화점 37.2%</td>
                  </tr>
                  <tr className="dangerRow">
                    <td><strong>신발 전체</strong></td>
                    <td className="num">-</td>
                    <td className="num"><strong>40%</strong></td>
                    <td>아울렛/제휴몰</td>
                  </tr>
                </tbody>
              </table>
              <ul style={{marginTop: '5px', fontSize: '7px'}}>
                <li><strong>의류:</strong> 백화점·대리점 중심 30% 이상 할인</li>
                <li><strong>신발:</strong> 전 품목 40% 균일 프로모션 → 브랜드 가치 훼손</li>
                <li><strong>자사몰 과도 할인:</strong> 타 채널 대비 3~20%p 추가 할인</li>
              </ul>
            </div>

            <div className="section">
              <div className="sectionTitle">🏭 기말재고 (5,165억, YoY 101%)</div>
              <table>
                <thead>
                  <tr>
                    <th>카테고리</th>
                    <th className="num">재고</th>
                    <th className="num">YoY</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="warnRow">
                    <td><strong>25F 의류</strong></td>
                    <td className="num">176,139</td>
                    <td className="num"><span className="badgeWarn">117%</span></td>
                  </tr>
                  <tr>
                    <td>25S 의류</td>
                    <td className="num">98,291</td>
                    <td className="num">96%</td>
                  </tr>
                  <tr>
                    <td>과시즌 의류</td>
                    <td className="num">92,264</td>
                    <td className="num">99%</td>
                  </tr>
                  <tr>
                    <td>신발</td>
                    <td className="num">46,409</td>
                    <td className="num">83%</td>
                  </tr>
                  <tr>
                    <td>가방</td>
                    <td className="num">37,719</td>
                    <td className="num">94%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <hr className="divider" />

        {/* ========== 5. 매장 효율성 ========== */}
        <div className="pageTitle" id="sec5">5. 매장 효율성 - 채널별 TOP5, 적자·저수익 16개 매장, 클로징 검토</div>

        <div className="container">
          <div className="left">
            <div className="section">
              <div className="sectionTitle">🏪 채널별 매장 현황</div>
              <table>
                <thead>
                  <tr>
                    <th>채널</th>
                    <th className="num">매장수</th>
                    <th className="num">증감</th>
                    <th className="num">점당매출</th>
                    <th className="num">YoY</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>백화점</td>
                    <td className="num">93개</td>
                    <td className="num textRed">-2</td>
                    <td className="num">126</td>
                    <td className="num"><span className="badgeUp">106%</span></td>
                  </tr>
                  <tr className="dangerRow">
                    <td><strong>대리점</strong></td>
                    <td className="num"><strong>122개</strong></td>
                    <td className="num textRed"><strong>-9</strong></td>
                    <td className="num">77</td>
                    <td className="num"><span className="badgeDown">96%</span></td>
                  </tr>
                  <tr className="successRow">
                    <td><strong>직영점</strong></td>
                    <td className="num"><strong>10개</strong></td>
                    <td className="num textGreen"><strong>+2</strong></td>
                    <td className="num">152</td>
                    <td className="num"><span className="badgeUp">109%</span></td>
                  </tr>
                  <tr className="successRow">
                    <td><strong>면세점</strong></td>
                    <td className="num"><strong>4개</strong></td>
                    <td className="num">-</td>
                    <td className="num"><strong>725</strong></td>
                    <td className="num"><span className="badgeUp">157%</span></td>
                  </tr>
                  <tr>
                    <td>아울렛</td>
                    <td className="num">38개</td>
                    <td className="num textGreen">+1</td>
                    <td className="num">202</td>
                    <td className="num"><span className="badgeDown">94%</span></td>
                  </tr>
                  <tr className="totalRow">
                    <td><strong>TOTAL</strong></td>
                    <td className="num"><strong>267개</strong></td>
                    <td className="num textRed"><strong>-8</strong></td>
                    <td className="num"><strong>124</strong></td>
                    <td className="num"><span className="badgeUp"><strong>104%</strong></span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="box boxGreen">
              <div className="boxTitle green">🏆 채널별 직접이익 TOP5 매장</div>
              
              <div style={{fontSize: '8px', fontWeight: 'bold', margin: '5px 0 3px 0', color: '#2d6a4f'}}>면세점 (초집중 🔴 Top5=100%)</div>
              <table style={{marginTop: '2px'}}>
                <thead>
                  <tr>
                    <th>매장명</th>
                    <th className="num">직접이익</th>
                    <th className="num">YoY</th>
                    <th className="num">이익률</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="successRow">
                    <td>신라장충</td>
                    <td className="num">146</td>
                    <td className="num"><strong>+209.4%</strong></td>
                    <td className="num">19.7%</td>
                  </tr>
                  <tr>
                    <td>신세계명동</td>
                    <td className="num">128</td>
                    <td className="num">-12.7%</td>
                    <td className="num">18.5%</td>
                  </tr>
                  <tr>
                    <td>현대무역(신규)</td>
                    <td className="num">114</td>
                    <td className="num">N/A</td>
                    <td className="num">21.6%</td>
                  </tr>
                  <tr>
                    <td>신라용산</td>
                    <td className="num">103</td>
                    <td className="num">-17.7%</td>
                    <td className="num">15.2%</td>
                  </tr>
                </tbody>
              </table>

              <div style={{fontSize: '8px', fontWeight: 'bold', margin: '8px 0 3px 0', color: '#2d6a4f'}}>자사몰 (안정 🟢 이익률 59%)</div>
              <table style={{marginTop: '2px'}}>
                <thead>
                  <tr>
                    <th>매장명</th>
                    <th className="num">직접이익</th>
                    <th className="num">YoY</th>
                    <th className="num">이익률</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="highlightRow">
                    <td>온라인쇼핑몰(직)</td>
                    <td className="num"><strong>829</strong></td>
                    <td className="num">+2.6%</td>
                    <td className="num"><strong>59.0%</strong></td>
                  </tr>
                  <tr>
                    <td>Discovery 쇼피파이</td>
                    <td className="num">2</td>
                    <td className="num">N/A</td>
                    <td className="num">68.5%</td>
                  </tr>
                </tbody>
              </table>

              <div style={{fontSize: '8px', fontWeight: 'bold', margin: '8px 0 3px 0', color: '#2d6a4f'}}>백화점 (분산 🟢 Top5=20%)</div>
              <table style={{marginTop: '2px'}}>
                <thead>
                  <tr>
                    <th>매장명</th>
                    <th className="num">직접이익</th>
                    <th className="num">YoY</th>
                    <th className="num">이익률</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>신세계강남</td>
                    <td className="num">185</td>
                    <td className="num">+22.1%</td>
                    <td className="num">31.1%</td>
                  </tr>
                  <tr>
                    <td>롯데잠실</td>
                    <td className="num">164</td>
                    <td className="num">+24.2%</td>
                    <td className="num">29.3%</td>
                  </tr>
                  <tr>
                    <td>롯데인천</td>
                    <td className="num">122</td>
                    <td className="num">+1.7%</td>
                    <td className="num">29.0%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="right">
            <div className="box boxRed">
              <div className="boxTitle red">🚨 적자 및 저수익 매장 (16개) - 즉시 조치 필요</div>
              
              <div style={{fontSize: '8px', fontWeight: 'bold', margin: '5px 0 3px 0'}}>즉시 클로징 검토 (11개)</div>
              <table style={{marginTop: '2px'}}>
                <thead>
                  <tr>
                    <th>매장명</th>
                    <th>채널</th>
                    <th className="num">직접이익</th>
                    <th className="num">YoY</th>
                    <th className="num">할인율</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="dangerRow">
                    <td><strong>가로수길(직)</strong></td>
                    <td>직영점</td>
                    <td className="num textRed"><strong>-16</strong></td>
                    <td className="num">-32.5%</td>
                    <td className="num">+2.3%p</td>
                  </tr>
                  <tr className="dangerRow">
                    <td>롯데센텀</td>
                    <td>백화점</td>
                    <td className="num">1</td>
                    <td className="num">-85.9%</td>
                    <td className="num">32.8%</td>
                  </tr>
                  <tr className="dangerRow">
                    <td>롯데포항</td>
                    <td>백화점</td>
                    <td className="num">9</td>
                    <td className="num">-35.2%</td>
                    <td className="num">+6.0%p</td>
                  </tr>
                  <tr className="dangerRow">
                    <td>롯데대구</td>
                    <td>백화점</td>
                    <td className="num">9</td>
                    <td className="num">-13.6%</td>
                    <td className="num">+6.1%p</td>
                  </tr>
                  <tr className="dangerRow">
                    <td>롯데광주</td>
                    <td>백화점</td>
                    <td className="num">9</td>
                    <td className="num">-68.2%</td>
                    <td className="num">36.9%</td>
                  </tr>
                  <tr className="dangerRow">
                    <td>롯데창원</td>
                    <td>백화점</td>
                    <td className="num">13</td>
                    <td className="num">-35.3%</td>
                    <td className="num">+4.2%p</td>
                  </tr>
                  <tr className="warnRow">
                    <td>스타필드하남(직)</td>
                    <td>직영점</td>
                    <td className="num">17</td>
                    <td className="num">-52.7%</td>
                    <td className="num">+7.2%p</td>
                  </tr>
                  <tr className="warnRow">
                    <td>신세계센텀</td>
                    <td>백화점</td>
                    <td className="num">28</td>
                    <td className="num">-32.3%</td>
                    <td className="num">+3.2%p</td>
                  </tr>
                  <tr className="warnRow">
                    <td><strong>롯데노원</strong></td>
                    <td>백화점</td>
                    <td className="num">25</td>
                    <td className="num">-27.0%</td>
                    <td className="num"><strong>43.1%</strong></td>
                  </tr>
                  <tr className="warnRow">
                    <td><strong>롯데김포</strong></td>
                    <td>백화점</td>
                    <td className="num">29</td>
                    <td className="num">+41.9%</td>
                    <td className="num">32.6%</td>
                  </tr>
                  <tr className="warnRow">
                    <td><strong>AK분당</strong></td>
                    <td>백화점</td>
                    <td className="num">32</td>
                    <td className="num">+19.1%</td>
                    <td className="num">30.7%</td>
                  </tr>
                </tbody>
              </table>
              <ul style={{marginTop: '5px', fontSize: '7px'}}>
                <li><strong>가로수길:</strong> 유일한 적자(-16백만), 2월 내 폐점 결정</li>
                <li><strong>할인 과다형 3개:</strong> 노원(43.1%), 김포(32.6%), AK분당(30.7%)</li>
                <li><strong>구조적 적자형 7개:</strong> 센텀·포항·대구·광주·창원 등</li>
              </ul>

              <div style={{fontSize: '8px', fontWeight: 'bold', margin: '8px 0 3px 0'}}>개선 가능 매장 (5개 대표)</div>
              <table style={{marginTop: '2px'}}>
                <thead>
                  <tr>
                    <th>매장명</th>
                    <th className="num">직접이익</th>
                    <th className="num">개선 포인트</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>롯데관악</td>
                    <td className="num">8.2</td>
                    <td className="num">매출+37.9%, 할인정상화</td>
                  </tr>
                  <tr>
                    <td>롯데강남</td>
                    <td className="num">9.6</td>
                    <td className="num">매출+11.1%, 플래그십</td>
                  </tr>
                  <tr>
                    <td>신세계경기</td>
                    <td className="num">22.9</td>
                    <td className="num">할인율-5.2%p 개선</td>
                  </tr>
                  <tr>
                    <td>명동점(직)</td>
                    <td className="num">29.9</td>
                    <td className="num">신규, 할인율6.9% 양호</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="box boxYellow">
              <div className="boxTitle yellow">📊 즉시 조치사항 (1주일 내)</div>
              <table style={{marginTop: '4px'}}>
                <thead>
                  <tr>
                    <th>조치</th>
                    <th>대상</th>
                    <th>목표</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="dangerRow">
                    <td><strong>가로수길 폐점 결정</strong></td>
                    <td>직영점</td>
                    <td>2월 내</td>
                  </tr>
                  <tr>
                    <td>할인율 25% 상한선</td>
                    <td>전 매장</td>
                    <td>3일 내 공지</td>
                  </tr>
                  <tr>
                    <td>노원/김포/AK 할인 하향</td>
                    <td>백화점 3개</td>
                    <td>1주일 내</td>
                  </tr>
                  <tr>
                    <td>클로징 검토 임대료 재협상</td>
                    <td>11개 매장</td>
                    <td>1주일 내</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="box boxBlue">
              <div className="boxTitle blue">✅ 기대 효과 (연간 기준)</div>
              <ul>
                <li><strong>클로징 11개 매장:</strong> 손실 절감 약 800백만원</li>
                <li><strong>개선 가능 5개:</strong> 할인율 정상화 시 +450백만원</li>
                <li><strong>가로수길 폐점:</strong> 연간 192백만원 손실 차단</li>
                <li><strong>할인율 25% 상한:</strong> 백화점 채널 +1,200백만원</li>
              </ul>
            </div>

            <div className="box boxGray">
              <div className="boxTitle">📈 매장 효율성 지표 (주간 모니터링)</div>
              <table style={{marginTop: '4px'}}>
                <thead>
                  <tr>
                    <th>지표</th>
                    <th className="num">현재</th>
                    <th className="num">1개월 목표</th>
                    <th className="num">3개월 목표</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>평균 할인율</td>
                    <td className="num">19.8%</td>
                    <td className="num">18.0%</td>
                    <td className="num">15.0%</td>
                  </tr>
                  <tr>
                    <td>적자 매장 수</td>
                    <td className="num">1개</td>
                    <td className="num">0개</td>
                    <td className="num">0개</td>
                  </tr>
                  <tr>
                    <td>저수익 매장 (10백만 이하)</td>
                    <td className="num">12개</td>
                    <td className="num">8개</td>
                    <td className="num">5개</td>
                  </tr>
                  <tr>
                    <td>할인 30% 이상 매장</td>
                    <td className="num">5개</td>
                    <td className="num">2개</td>
                    <td className="num">0개</td>
                  </tr>
                  <tr>
                    <td>평균 직접이익 (매장당)</td>
                    <td className="num">16백만</td>
                    <td className="num">20백만</td>
                    <td className="num">28백만</td>
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

      <a 
        href="#top" 
        className="scrollTop"
        onClick={(e) => {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
      >
        ↑
      </a>
    </>
  )
}


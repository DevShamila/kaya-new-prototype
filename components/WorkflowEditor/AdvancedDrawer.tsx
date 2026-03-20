import React from "react";
import { X, Search, Link } from "lucide-react";
import styles from "./AdvancedDrawer.module.css";
import EditorDrawer from "./EditorDrawer";

interface AdvancedDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdvancedDrawer: React.FC<AdvancedDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <EditorDrawer isOpen={isOpen} onClose={onClose}>
      <div className={styles.slideOutMenuHeader}>
        <div className={styles.content}>
          <div className={styles.featuredIcon}></div>
          <div className={styles.textAndSupportingText}>
            <div className={styles.textParent}>
              <div className={styles.text}>Add data and tools</div>
              <div className={styles.supportingText}>
                Connect the apps and data sources your agent can use to answer questions and take action.
              </div>
            </div>
          </div>
        </div>
        <button className={styles.buttonsbuttonCloseX} onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>
      </div>

      <div className={styles.content2}>
        <div className={styles.section}>
          <div className={styles.textAndSupportingText2}>
            <div className={styles.text2}>Share project</div>
            <div className={styles.iconAndText}>
              <Link className={styles.link01} size={16} />
              <div className={styles.text3}>untitledui.com/project/marketing-site</div>
            </div>
          </div>
          <div className={styles.buttonsbutton}></div>
        </div>

        <div className={styles.section2}>
          <div className={styles.selectParent}>
            <div className={styles.select}>
              <div className={styles.inputWithLabel}>
                <div className={styles.input}>
                  <div className={styles.content3}>
                    <Search size={20} />
                    <div className={styles.text4}>Search models...</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.buttonsbutton2}>
              <div className={styles.textPadding}>
                <div className={styles.text5}>Connect new integration</div>
              </div>
            </div>
          </div>

          <div className={styles.horizontalTabsParent}>
            <div className={styles.horizontalTabs}>
              <div className={styles.tabs}>
                <div className={styles.tabButtonBase}>
                  <div className={styles.text6}>APIs</div>
                </div>
                <div className={styles.tabButtonBase2}>
                  <div className={styles.text6}>MCP Servers</div>
                </div>
                <div className={styles.tabButtonBase2}>
                  <div className={styles.text6}>Vector RAGs</div>
                </div>
                <div className={styles.tabButtonBase2}>
                  <div className={styles.text6}>Graph RAGs</div>
                </div>
                <div className={styles.tabButtonBase2}>
                  <div className={styles.text6}>Connectors</div>
                </div>
                <div className={styles.tabButtonBase2}>
                  <div className={styles.text6}>Functions</div>
                </div>
              </div>
            </div>
            <div className={styles.supportingTextParent}>
              <div className={styles.supportingText2}>
                Connect the apps and data sources your agent can use to answer questions and take action.
              </div>
              <div className={styles.buttonsbutton3}>
                <div className={styles.text6}>Learn more about APIs</div>
                <Link size={14} style={{ marginLeft: '4px', transform: 'rotate(-45deg)' }} />
              </div>
            </div>
          </div>

          <div className={styles.radioGroupItem}>
            <div className={styles.content4}>
              <div className={styles.input2}>
                <div className={styles.checkboxBase}>
                  <X className={styles.checkIcon} size={14} />
                </div>
              </div>
              <div className={styles.textAndSupportingText3}>
                <div className={styles.textParent}>
                  <div className={styles.textAndSubtext}>
                    <div className={styles.text13}>CRM API</div>
                  </div>
                  <div className={styles.supportingTextWrapper}>
                    <div className={styles.supportingText3}>
                      Get customer profiles and interaction history.
                    </div>
                  </div>
                </div>
                <div className={styles.badgeParent}>
                  <div className={styles.badge}>
                    <div className={styles.text14}>GET · Read only</div>
                  </div>
                  <div className={styles.badge2}>
                    <div className={styles.text14}>Sign-in: API key</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.radioGroupItem2}>
            <div className={styles.content4}>
              <div className={styles.input2}>
                <div className={styles.checkboxBase2}></div>
              </div>
              <div className={styles.textAndSupportingText3}>
                <div className={styles.textParent}>
                  <div className={styles.textAndSubtext}>
                    <div className={styles.text13}>CRM API</div>
                  </div>
                  <div className={styles.supportingTextWrapper}>
                    <div className={styles.supportingText3}>
                      Get customer profiles and interaction history.
                    </div>
                  </div>
                </div>
                <div className={styles.badgeParent}>
                  <div className={styles.badge}>
                    <div className={styles.text14}>GET · Read only</div>
                  </div>
                  <div className={styles.badge2}>
                    <div className={styles.text14}>Sign-in: API key</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.content6}>
          <div className={styles.actions}>
            <button className={styles.buttonsbutton4} onClick={onClose}>
              <div className={styles.textPadding}>
                <div className={styles.text6}>Cancel</div>
              </div>
            </button>
            <button className={styles.buttonsbutton5} onClick={onClose}>
              <div className={styles.textPadding}>
                <div className={styles.text6}>Add Selected (1)</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </EditorDrawer>
  );
};

export default AdvancedDrawer;

# `dataCloudflareEmailSecurityAllowPolicies` Submodule <a name="`dataCloudflareEmailSecurityAllowPolicies` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailSecurityAllowPolicies <a name="DataCloudflareEmailSecurityAllowPolicies" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies cloudflare_email_security_allow_policies}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_allow_policies.DataCloudflareEmailSecurityAllowPolicies;

DataCloudflareEmailSecurityAllowPolicies.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .direction(java.lang.String)
//  .isAcceptableSender(java.lang.Boolean|IResolvable)
//  .isExemptRecipient(java.lang.Boolean|IResolvable)
//  .isTrustedSender(java.lang.Boolean|IResolvable)
//  .maxItems(java.lang.Number)
//  .order(java.lang.String)
//  .pattern(java.lang.String)
//  .patternType(java.lang.String)
//  .search(java.lang.String)
//  .verifySender(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.direction">direction</a></code> | <code>java.lang.String</code> | The sorting direction. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.isAcceptableSender">isAcceptableSender</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Filter to show only policies where messages from the sender are exempted from Spam, Spoof, and Bulk dispositions (not Malicious or Suspicious). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.isExemptRecipient">isExemptRecipient</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Filter to show only policies where messages to the recipient bypass all detections. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.isTrustedSender">isTrustedSender</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Filter to show only policies where messages from the sender bypass all detections and link following. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.order">order</a></code> | <code>java.lang.String</code> | Field to sort by. Available values: "pattern", "created_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.pattern">pattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#pattern DataCloudflareEmailSecurityAllowPolicies#pattern}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.patternType">patternType</a></code> | <code>java.lang.String</code> | Type of pattern matching. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.search">search</a></code> | <code>java.lang.String</code> | Search term for filtering records. Behavior may change. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.verifySender">verifySender</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Filter to show only policies that enforce DMARC, SPF, or DKIM authentication. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#account_id DataCloudflareEmailSecurityAllowPolicies#account_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.direction"></a>

- *Type:* java.lang.String

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#direction DataCloudflareEmailSecurityAllowPolicies#direction}

---

##### `isAcceptableSender`<sup>Optional</sup> <a name="isAcceptableSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.isAcceptableSender"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Filter to show only policies where messages from the sender are exempted from Spam, Spoof, and Bulk dispositions (not Malicious or Suspicious).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#is_acceptable_sender DataCloudflareEmailSecurityAllowPolicies#is_acceptable_sender}

---

##### `isExemptRecipient`<sup>Optional</sup> <a name="isExemptRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.isExemptRecipient"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Filter to show only policies where messages to the recipient bypass all detections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#is_exempt_recipient DataCloudflareEmailSecurityAllowPolicies#is_exempt_recipient}

---

##### `isTrustedSender`<sup>Optional</sup> <a name="isTrustedSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.isTrustedSender"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Filter to show only policies where messages from the sender bypass all detections and link following.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#is_trusted_sender DataCloudflareEmailSecurityAllowPolicies#is_trusted_sender}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#max_items DataCloudflareEmailSecurityAllowPolicies#max_items}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.order"></a>

- *Type:* java.lang.String

Field to sort by. Available values: "pattern", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#order DataCloudflareEmailSecurityAllowPolicies#order}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.pattern"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#pattern DataCloudflareEmailSecurityAllowPolicies#pattern}.

---

##### `patternType`<sup>Optional</sup> <a name="patternType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.patternType"></a>

- *Type:* java.lang.String

Type of pattern matching.

* EMAIL: matches a full email address (e.g. `user@example.com`)
* DOMAIN: matches a domain name (e.g. `example.com`)
* IP: matches a plain IPv4 or IPv6 address (e.g. `1.2.3.4` or `2606:4700:4700::1111`) or CIDR block (e.g. `1.2.3.0/24` or `2606:4700:4700::/48`). The API rejects private or unique-local, loopback, link-local, unspecified, and IPv4 broadcast addresses, including their IPv4-mapped IPv6 equivalents.
* UNKNOWN: deprecated; you cannot use this when creating or updating policies, but it may appear on existing entries.
  Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#pattern_type DataCloudflareEmailSecurityAllowPolicies#pattern_type}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.search"></a>

- *Type:* java.lang.String

Search term for filtering records. Behavior may change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#search DataCloudflareEmailSecurityAllowPolicies#search}

---

##### `verifySender`<sup>Optional</sup> <a name="verifySender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.verifySender"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Filter to show only policies that enforce DMARC, SPF, or DKIM authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#verify_sender DataCloudflareEmailSecurityAllowPolicies#verify_sender}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetIsAcceptableSender">resetIsAcceptableSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetIsExemptRecipient">resetIsExemptRecipient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetIsTrustedSender">resetIsTrustedSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetPattern">resetPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetPatternType">resetPatternType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetVerifySender">resetVerifySender</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetIsAcceptableSender` <a name="resetIsAcceptableSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetIsAcceptableSender"></a>

```java
public void resetIsAcceptableSender()
```

##### `resetIsExemptRecipient` <a name="resetIsExemptRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetIsExemptRecipient"></a>

```java
public void resetIsExemptRecipient()
```

##### `resetIsTrustedSender` <a name="resetIsTrustedSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetIsTrustedSender"></a>

```java
public void resetIsTrustedSender()
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetMaxItems"></a>

```java
public void resetMaxItems()
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetPattern` <a name="resetPattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetPattern"></a>

```java
public void resetPattern()
```

##### `resetPatternType` <a name="resetPatternType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetPatternType"></a>

```java
public void resetPatternType()
```

##### `resetSearch` <a name="resetSearch" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetSearch"></a>

```java
public void resetSearch()
```

##### `resetVerifySender` <a name="resetVerifySender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetVerifySender"></a>

```java
public void resetVerifySender()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareEmailSecurityAllowPolicies resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_allow_policies.DataCloudflareEmailSecurityAllowPolicies;

DataCloudflareEmailSecurityAllowPolicies.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_allow_policies.DataCloudflareEmailSecurityAllowPolicies;

DataCloudflareEmailSecurityAllowPolicies.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_allow_policies.DataCloudflareEmailSecurityAllowPolicies;

DataCloudflareEmailSecurityAllowPolicies.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_allow_policies.DataCloudflareEmailSecurityAllowPolicies;

DataCloudflareEmailSecurityAllowPolicies.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareEmailSecurityAllowPolicies.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareEmailSecurityAllowPolicies resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareEmailSecurityAllowPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareEmailSecurityAllowPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailSecurityAllowPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList">DataCloudflareEmailSecurityAllowPoliciesResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isAcceptableSenderInput">isAcceptableSenderInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isExemptRecipientInput">isExemptRecipientInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isTrustedSenderInput">isTrustedSenderInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.orderInput">orderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.patternInput">patternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.patternTypeInput">patternTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.searchInput">searchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.verifySenderInput">verifySenderInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isAcceptableSender">isAcceptableSender</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isExemptRecipient">isExemptRecipient</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isTrustedSender">isTrustedSender</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.order">order</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.patternType">patternType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.search">search</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.verifySender">verifySender</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.result"></a>

```java
public DataCloudflareEmailSecurityAllowPoliciesResultList getResult();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList">DataCloudflareEmailSecurityAllowPoliciesResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `isAcceptableSenderInput`<sup>Optional</sup> <a name="isAcceptableSenderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isAcceptableSenderInput"></a>

```java
public java.lang.Boolean|IResolvable getIsAcceptableSenderInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isExemptRecipientInput`<sup>Optional</sup> <a name="isExemptRecipientInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isExemptRecipientInput"></a>

```java
public java.lang.Boolean|IResolvable getIsExemptRecipientInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isTrustedSenderInput`<sup>Optional</sup> <a name="isTrustedSenderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isTrustedSenderInput"></a>

```java
public java.lang.Boolean|IResolvable getIsTrustedSenderInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.orderInput"></a>

```java
public java.lang.String getOrderInput();
```

- *Type:* java.lang.String

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.patternInput"></a>

```java
public java.lang.String getPatternInput();
```

- *Type:* java.lang.String

---

##### `patternTypeInput`<sup>Optional</sup> <a name="patternTypeInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.patternTypeInput"></a>

```java
public java.lang.String getPatternTypeInput();
```

- *Type:* java.lang.String

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.searchInput"></a>

```java
public java.lang.String getSearchInput();
```

- *Type:* java.lang.String

---

##### `verifySenderInput`<sup>Optional</sup> <a name="verifySenderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.verifySenderInput"></a>

```java
public java.lang.Boolean|IResolvable getVerifySenderInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `isAcceptableSender`<sup>Required</sup> <a name="isAcceptableSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isAcceptableSender"></a>

```java
public java.lang.Boolean|IResolvable getIsAcceptableSender();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isExemptRecipient`<sup>Required</sup> <a name="isExemptRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isExemptRecipient"></a>

```java
public java.lang.Boolean|IResolvable getIsExemptRecipient();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isTrustedSender`<sup>Required</sup> <a name="isTrustedSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isTrustedSender"></a>

```java
public java.lang.Boolean|IResolvable getIsTrustedSender();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `patternType`<sup>Required</sup> <a name="patternType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.patternType"></a>

```java
public java.lang.String getPatternType();
```

- *Type:* java.lang.String

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

---

##### `verifySender`<sup>Required</sup> <a name="verifySender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.verifySender"></a>

```java
public java.lang.Boolean|IResolvable getVerifySender();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailSecurityAllowPoliciesConfig <a name="DataCloudflareEmailSecurityAllowPoliciesConfig" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_allow_policies.DataCloudflareEmailSecurityAllowPoliciesConfig;

DataCloudflareEmailSecurityAllowPoliciesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .direction(java.lang.String)
//  .isAcceptableSender(java.lang.Boolean|IResolvable)
//  .isExemptRecipient(java.lang.Boolean|IResolvable)
//  .isTrustedSender(java.lang.Boolean|IResolvable)
//  .maxItems(java.lang.Number)
//  .order(java.lang.String)
//  .pattern(java.lang.String)
//  .patternType(java.lang.String)
//  .search(java.lang.String)
//  .verifySender(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.direction">direction</a></code> | <code>java.lang.String</code> | The sorting direction. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.isAcceptableSender">isAcceptableSender</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Filter to show only policies where messages from the sender are exempted from Spam, Spoof, and Bulk dispositions (not Malicious or Suspicious). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.isExemptRecipient">isExemptRecipient</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Filter to show only policies where messages to the recipient bypass all detections. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.isTrustedSender">isTrustedSender</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Filter to show only policies where messages from the sender bypass all detections and link following. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.order">order</a></code> | <code>java.lang.String</code> | Field to sort by. Available values: "pattern", "created_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.pattern">pattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#pattern DataCloudflareEmailSecurityAllowPolicies#pattern}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.patternType">patternType</a></code> | <code>java.lang.String</code> | Type of pattern matching. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.search">search</a></code> | <code>java.lang.String</code> | Search term for filtering records. Behavior may change. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.verifySender">verifySender</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Filter to show only policies that enforce DMARC, SPF, or DKIM authentication. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#account_id DataCloudflareEmailSecurityAllowPolicies#account_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#direction DataCloudflareEmailSecurityAllowPolicies#direction}

---

##### `isAcceptableSender`<sup>Optional</sup> <a name="isAcceptableSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.isAcceptableSender"></a>

```java
public java.lang.Boolean|IResolvable getIsAcceptableSender();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Filter to show only policies where messages from the sender are exempted from Spam, Spoof, and Bulk dispositions (not Malicious or Suspicious).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#is_acceptable_sender DataCloudflareEmailSecurityAllowPolicies#is_acceptable_sender}

---

##### `isExemptRecipient`<sup>Optional</sup> <a name="isExemptRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.isExemptRecipient"></a>

```java
public java.lang.Boolean|IResolvable getIsExemptRecipient();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Filter to show only policies where messages to the recipient bypass all detections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#is_exempt_recipient DataCloudflareEmailSecurityAllowPolicies#is_exempt_recipient}

---

##### `isTrustedSender`<sup>Optional</sup> <a name="isTrustedSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.isTrustedSender"></a>

```java
public java.lang.Boolean|IResolvable getIsTrustedSender();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Filter to show only policies where messages from the sender bypass all detections and link following.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#is_trusted_sender DataCloudflareEmailSecurityAllowPolicies#is_trusted_sender}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#max_items DataCloudflareEmailSecurityAllowPolicies#max_items}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

Field to sort by. Available values: "pattern", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#order DataCloudflareEmailSecurityAllowPolicies#order}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#pattern DataCloudflareEmailSecurityAllowPolicies#pattern}.

---

##### `patternType`<sup>Optional</sup> <a name="patternType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.patternType"></a>

```java
public java.lang.String getPatternType();
```

- *Type:* java.lang.String

Type of pattern matching.

* EMAIL: matches a full email address (e.g. `user@example.com`)
* DOMAIN: matches a domain name (e.g. `example.com`)
* IP: matches a plain IPv4 or IPv6 address (e.g. `1.2.3.4` or `2606:4700:4700::1111`) or CIDR block (e.g. `1.2.3.0/24` or `2606:4700:4700::/48`). The API rejects private or unique-local, loopback, link-local, unspecified, and IPv4 broadcast addresses, including their IPv4-mapped IPv6 equivalents.
* UNKNOWN: deprecated; you cannot use this when creating or updating policies, but it may appear on existing entries.
  Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#pattern_type DataCloudflareEmailSecurityAllowPolicies#pattern_type}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

Search term for filtering records. Behavior may change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#search DataCloudflareEmailSecurityAllowPolicies#search}

---

##### `verifySender`<sup>Optional</sup> <a name="verifySender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.verifySender"></a>

```java
public java.lang.Boolean|IResolvable getVerifySender();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Filter to show only policies that enforce DMARC, SPF, or DKIM authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#verify_sender DataCloudflareEmailSecurityAllowPolicies#verify_sender}

---

### DataCloudflareEmailSecurityAllowPoliciesResult <a name="DataCloudflareEmailSecurityAllowPoliciesResult" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResult.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_allow_policies.DataCloudflareEmailSecurityAllowPoliciesResult;

DataCloudflareEmailSecurityAllowPoliciesResult.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailSecurityAllowPoliciesResultList <a name="DataCloudflareEmailSecurityAllowPoliciesResultList" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_allow_policies.DataCloudflareEmailSecurityAllowPoliciesResultList;

new DataCloudflareEmailSecurityAllowPoliciesResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.get"></a>

```java
public DataCloudflareEmailSecurityAllowPoliciesResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareEmailSecurityAllowPoliciesResultOutputReference <a name="DataCloudflareEmailSecurityAllowPoliciesResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_allow_policies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference;

new DataCloudflareEmailSecurityAllowPoliciesResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.comments">comments</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isAcceptableSender">isAcceptableSender</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isExemptRecipient">isExemptRecipient</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isRecipient">isRecipient</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isRegex">isRegex</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isSender">isSender</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isSpoof">isSpoof</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isTrustedSender">isTrustedSender</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.patternType">patternType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.verifySender">verifySender</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResult">DataCloudflareEmailSecurityAllowPoliciesResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comments`<sup>Required</sup> <a name="comments" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.comments"></a>

```java
public java.lang.String getComments();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isAcceptableSender`<sup>Required</sup> <a name="isAcceptableSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isAcceptableSender"></a>

```java
public IResolvable getIsAcceptableSender();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `isExemptRecipient`<sup>Required</sup> <a name="isExemptRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isExemptRecipient"></a>

```java
public IResolvable getIsExemptRecipient();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `isRecipient`<sup>Required</sup> <a name="isRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isRecipient"></a>

```java
public IResolvable getIsRecipient();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `isRegex`<sup>Required</sup> <a name="isRegex" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isRegex"></a>

```java
public IResolvable getIsRegex();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `isSender`<sup>Required</sup> <a name="isSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isSender"></a>

```java
public IResolvable getIsSender();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `isSpoof`<sup>Required</sup> <a name="isSpoof" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isSpoof"></a>

```java
public IResolvable getIsSpoof();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `isTrustedSender`<sup>Required</sup> <a name="isTrustedSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isTrustedSender"></a>

```java
public IResolvable getIsTrustedSender();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `patternType`<sup>Required</sup> <a name="patternType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.patternType"></a>

```java
public java.lang.String getPatternType();
```

- *Type:* java.lang.String

---

##### `verifySender`<sup>Required</sup> <a name="verifySender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.verifySender"></a>

```java
public IResolvable getVerifySender();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareEmailSecurityAllowPoliciesResult getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResult">DataCloudflareEmailSecurityAllowPoliciesResult</a>

---




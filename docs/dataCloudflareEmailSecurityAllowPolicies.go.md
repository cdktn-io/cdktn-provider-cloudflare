# `dataCloudflareEmailSecurityAllowPolicies` Submodule <a name="`dataCloudflareEmailSecurityAllowPolicies` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailSecurityAllowPolicies <a name="DataCloudflareEmailSecurityAllowPolicies" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies cloudflare_email_security_allow_policies}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflareemailsecurityallowpolicies"

datacloudflareemailsecurityallowpolicies.NewDataCloudflareEmailSecurityAllowPolicies(scope Construct, id *string, config DataCloudflareEmailSecurityAllowPoliciesConfig) DataCloudflareEmailSecurityAllowPolicies
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig">DataCloudflareEmailSecurityAllowPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig">DataCloudflareEmailSecurityAllowPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetIsAcceptableSender">ResetIsAcceptableSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetIsExemptRecipient">ResetIsExemptRecipient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetIsTrustedSender">ResetIsTrustedSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetPattern">ResetPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetPatternType">ResetPatternType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetSearch">ResetSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetVerifySender">ResetVerifySender</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetIsAcceptableSender` <a name="ResetIsAcceptableSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetIsAcceptableSender"></a>

```go
func ResetIsAcceptableSender()
```

##### `ResetIsExemptRecipient` <a name="ResetIsExemptRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetIsExemptRecipient"></a>

```go
func ResetIsExemptRecipient()
```

##### `ResetIsTrustedSender` <a name="ResetIsTrustedSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetIsTrustedSender"></a>

```go
func ResetIsTrustedSender()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetMaxItems"></a>

```go
func ResetMaxItems()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetPattern` <a name="ResetPattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetPattern"></a>

```go
func ResetPattern()
```

##### `ResetPatternType` <a name="ResetPatternType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetPatternType"></a>

```go
func ResetPatternType()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetSearch"></a>

```go
func ResetSearch()
```

##### `ResetVerifySender` <a name="ResetVerifySender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.resetVerifySender"></a>

```go
func ResetVerifySender()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareEmailSecurityAllowPolicies resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflareemailsecurityallowpolicies"

datacloudflareemailsecurityallowpolicies.DataCloudflareEmailSecurityAllowPolicies_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflareemailsecurityallowpolicies"

datacloudflareemailsecurityallowpolicies.DataCloudflareEmailSecurityAllowPolicies_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflareemailsecurityallowpolicies"

datacloudflareemailsecurityallowpolicies.DataCloudflareEmailSecurityAllowPolicies_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflareemailsecurityallowpolicies"

datacloudflareemailsecurityallowpolicies.DataCloudflareEmailSecurityAllowPolicies_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareEmailSecurityAllowPolicies resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareEmailSecurityAllowPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareEmailSecurityAllowPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailSecurityAllowPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.result">Result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList">DataCloudflareEmailSecurityAllowPoliciesResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isAcceptableSenderInput">IsAcceptableSenderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isExemptRecipientInput">IsExemptRecipientInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isTrustedSenderInput">IsTrustedSenderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.patternTypeInput">PatternTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.searchInput">SearchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.verifySenderInput">VerifySenderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isAcceptableSender">IsAcceptableSender</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isExemptRecipient">IsExemptRecipient</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isTrustedSender">IsTrustedSender</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.patternType">PatternType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.search">Search</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.verifySender">VerifySender</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.result"></a>

```go
func Result() DataCloudflareEmailSecurityAllowPoliciesResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList">DataCloudflareEmailSecurityAllowPoliciesResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `IsAcceptableSenderInput`<sup>Optional</sup> <a name="IsAcceptableSenderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isAcceptableSenderInput"></a>

```go
func IsAcceptableSenderInput() interface{}
```

- *Type:* interface{}

---

##### `IsExemptRecipientInput`<sup>Optional</sup> <a name="IsExemptRecipientInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isExemptRecipientInput"></a>

```go
func IsExemptRecipientInput() interface{}
```

- *Type:* interface{}

---

##### `IsTrustedSenderInput`<sup>Optional</sup> <a name="IsTrustedSenderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isTrustedSenderInput"></a>

```go
func IsTrustedSenderInput() interface{}
```

- *Type:* interface{}

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `PatternTypeInput`<sup>Optional</sup> <a name="PatternTypeInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.patternTypeInput"></a>

```go
func PatternTypeInput() *string
```

- *Type:* *string

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.searchInput"></a>

```go
func SearchInput() *string
```

- *Type:* *string

---

##### `VerifySenderInput`<sup>Optional</sup> <a name="VerifySenderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.verifySenderInput"></a>

```go
func VerifySenderInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `IsAcceptableSender`<sup>Required</sup> <a name="IsAcceptableSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isAcceptableSender"></a>

```go
func IsAcceptableSender() interface{}
```

- *Type:* interface{}

---

##### `IsExemptRecipient`<sup>Required</sup> <a name="IsExemptRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isExemptRecipient"></a>

```go
func IsExemptRecipient() interface{}
```

- *Type:* interface{}

---

##### `IsTrustedSender`<sup>Required</sup> <a name="IsTrustedSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.isTrustedSender"></a>

```go
func IsTrustedSender() interface{}
```

- *Type:* interface{}

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `PatternType`<sup>Required</sup> <a name="PatternType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.patternType"></a>

```go
func PatternType() *string
```

- *Type:* *string

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.search"></a>

```go
func Search() *string
```

- *Type:* *string

---

##### `VerifySender`<sup>Required</sup> <a name="VerifySender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.verifySender"></a>

```go
func VerifySender() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPolicies.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailSecurityAllowPoliciesConfig <a name="DataCloudflareEmailSecurityAllowPoliciesConfig" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflareemailsecurityallowpolicies"

&datacloudflareemailsecurityallowpolicies.DataCloudflareEmailSecurityAllowPoliciesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Direction: *string,
	IsAcceptableSender: interface{},
	IsExemptRecipient: interface{},
	IsTrustedSender: interface{},
	MaxItems: *f64,
	Order: *string,
	Pattern: *string,
	PatternType: *string,
	Search: *string,
	VerifySender: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.direction">Direction</a></code> | <code>*string</code> | The sorting direction. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.isAcceptableSender">IsAcceptableSender</a></code> | <code>interface{}</code> | Filter to show only policies where messages from the sender are exempted from Spam, Spoof, and Bulk dispositions (not Malicious or Suspicious). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.isExemptRecipient">IsExemptRecipient</a></code> | <code>interface{}</code> | Filter to show only policies where messages to the recipient bypass all detections. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.isTrustedSender">IsTrustedSender</a></code> | <code>interface{}</code> | Filter to show only policies where messages from the sender bypass all detections and link following. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.order">Order</a></code> | <code>*string</code> | Field to sort by. Available values: "pattern", "created_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.pattern">Pattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#pattern DataCloudflareEmailSecurityAllowPolicies#pattern}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.patternType">PatternType</a></code> | <code>*string</code> | Type of pattern matching. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.search">Search</a></code> | <code>*string</code> | Search term for filtering records. Behavior may change. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.verifySender">VerifySender</a></code> | <code>interface{}</code> | Filter to show only policies that enforce DMARC, SPF, or DKIM authentication. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#account_id DataCloudflareEmailSecurityAllowPolicies#account_id}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#direction DataCloudflareEmailSecurityAllowPolicies#direction}

---

##### `IsAcceptableSender`<sup>Optional</sup> <a name="IsAcceptableSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.isAcceptableSender"></a>

```go
IsAcceptableSender interface{}
```

- *Type:* interface{}

Filter to show only policies where messages from the sender are exempted from Spam, Spoof, and Bulk dispositions (not Malicious or Suspicious).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#is_acceptable_sender DataCloudflareEmailSecurityAllowPolicies#is_acceptable_sender}

---

##### `IsExemptRecipient`<sup>Optional</sup> <a name="IsExemptRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.isExemptRecipient"></a>

```go
IsExemptRecipient interface{}
```

- *Type:* interface{}

Filter to show only policies where messages to the recipient bypass all detections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#is_exempt_recipient DataCloudflareEmailSecurityAllowPolicies#is_exempt_recipient}

---

##### `IsTrustedSender`<sup>Optional</sup> <a name="IsTrustedSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.isTrustedSender"></a>

```go
IsTrustedSender interface{}
```

- *Type:* interface{}

Filter to show only policies where messages from the sender bypass all detections and link following.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#is_trusted_sender DataCloudflareEmailSecurityAllowPolicies#is_trusted_sender}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#max_items DataCloudflareEmailSecurityAllowPolicies#max_items}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.order"></a>

```go
Order *string
```

- *Type:* *string

Field to sort by. Available values: "pattern", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#order DataCloudflareEmailSecurityAllowPolicies#order}

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#pattern DataCloudflareEmailSecurityAllowPolicies#pattern}.

---

##### `PatternType`<sup>Optional</sup> <a name="PatternType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.patternType"></a>

```go
PatternType *string
```

- *Type:* *string

Type of pattern matching.

* EMAIL: matches a full email address (e.g. `user@example.com`)
* DOMAIN: matches a domain name (e.g. `example.com`)
* IP: matches a plain IPv4 or IPv6 address (e.g. `1.2.3.4` or `2606:4700:4700::1111`) or CIDR block (e.g. `1.2.3.0/24` or `2606:4700:4700::/48`). The API rejects private or unique-local, loopback, link-local, unspecified, and IPv4 broadcast addresses, including their IPv4-mapped IPv6 equivalents.
* UNKNOWN: deprecated; you cannot use this when creating or updating policies, but it may appear on existing entries.
  Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#pattern_type DataCloudflareEmailSecurityAllowPolicies#pattern_type}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.search"></a>

```go
Search *string
```

- *Type:* *string

Search term for filtering records. Behavior may change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#search DataCloudflareEmailSecurityAllowPolicies#search}

---

##### `VerifySender`<sup>Optional</sup> <a name="VerifySender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesConfig.property.verifySender"></a>

```go
VerifySender interface{}
```

- *Type:* interface{}

Filter to show only policies that enforce DMARC, SPF, or DKIM authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policies#verify_sender DataCloudflareEmailSecurityAllowPolicies#verify_sender}

---

### DataCloudflareEmailSecurityAllowPoliciesResult <a name="DataCloudflareEmailSecurityAllowPoliciesResult" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResult.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflareemailsecurityallowpolicies"

&datacloudflareemailsecurityallowpolicies.DataCloudflareEmailSecurityAllowPoliciesResult {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailSecurityAllowPoliciesResultList <a name="DataCloudflareEmailSecurityAllowPoliciesResultList" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflareemailsecurityallowpolicies"

datacloudflareemailsecurityallowpolicies.NewDataCloudflareEmailSecurityAllowPoliciesResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareEmailSecurityAllowPoliciesResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.get"></a>

```go
func Get(index *f64) DataCloudflareEmailSecurityAllowPoliciesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareEmailSecurityAllowPoliciesResultOutputReference <a name="DataCloudflareEmailSecurityAllowPoliciesResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflareemailsecurityallowpolicies"

datacloudflareemailsecurityallowpolicies.NewDataCloudflareEmailSecurityAllowPoliciesResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareEmailSecurityAllowPoliciesResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.comments">Comments</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isAcceptableSender">IsAcceptableSender</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isExemptRecipient">IsExemptRecipient</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isRecipient">IsRecipient</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isRegex">IsRegex</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isSender">IsSender</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isSpoof">IsSpoof</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isTrustedSender">IsTrustedSender</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.patternType">PatternType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.verifySender">VerifySender</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResult">DataCloudflareEmailSecurityAllowPoliciesResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comments`<sup>Required</sup> <a name="Comments" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.comments"></a>

```go
func Comments() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsAcceptableSender`<sup>Required</sup> <a name="IsAcceptableSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isAcceptableSender"></a>

```go
func IsAcceptableSender() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IsExemptRecipient`<sup>Required</sup> <a name="IsExemptRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isExemptRecipient"></a>

```go
func IsExemptRecipient() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IsRecipient`<sup>Required</sup> <a name="IsRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isRecipient"></a>

```go
func IsRecipient() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IsRegex`<sup>Required</sup> <a name="IsRegex" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isRegex"></a>

```go
func IsRegex() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IsSender`<sup>Required</sup> <a name="IsSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isSender"></a>

```go
func IsSender() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IsSpoof`<sup>Required</sup> <a name="IsSpoof" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isSpoof"></a>

```go
func IsSpoof() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IsTrustedSender`<sup>Required</sup> <a name="IsTrustedSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.isTrustedSender"></a>

```go
func IsTrustedSender() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `PatternType`<sup>Required</sup> <a name="PatternType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.patternType"></a>

```go
func PatternType() *string
```

- *Type:* *string

---

##### `VerifySender`<sup>Required</sup> <a name="VerifySender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.verifySender"></a>

```go
func VerifySender() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareEmailSecurityAllowPoliciesResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicies.DataCloudflareEmailSecurityAllowPoliciesResult">DataCloudflareEmailSecurityAllowPoliciesResult</a>

---




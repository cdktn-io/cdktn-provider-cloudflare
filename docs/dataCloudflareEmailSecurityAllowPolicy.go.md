# `dataCloudflareEmailSecurityAllowPolicy` Submodule <a name="`dataCloudflareEmailSecurityAllowPolicy` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailSecurityAllowPolicy <a name="DataCloudflareEmailSecurityAllowPolicy" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy cloudflare_email_security_allow_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflareemailsecurityallowpolicy"

datacloudflareemailsecurityallowpolicy.NewDataCloudflareEmailSecurityAllowPolicy(scope Construct, id *string, config DataCloudflareEmailSecurityAllowPolicyConfig) DataCloudflareEmailSecurityAllowPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig">DataCloudflareEmailSecurityAllowPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig">DataCloudflareEmailSecurityAllowPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.resetPolicyId">ResetPolicyId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.putFilter"></a>

```go
func PutFilter(value DataCloudflareEmailSecurityAllowPolicyFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter">DataCloudflareEmailSecurityAllowPolicyFilter</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.resetPolicyId"></a>

```go
func ResetPolicyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareEmailSecurityAllowPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflareemailsecurityallowpolicy"

datacloudflareemailsecurityallowpolicy.DataCloudflareEmailSecurityAllowPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflareemailsecurityallowpolicy"

datacloudflareemailsecurityallowpolicy.DataCloudflareEmailSecurityAllowPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflareemailsecurityallowpolicy"

datacloudflareemailsecurityallowpolicy.DataCloudflareEmailSecurityAllowPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflareemailsecurityallowpolicy"

datacloudflareemailsecurityallowpolicy.DataCloudflareEmailSecurityAllowPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareEmailSecurityAllowPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareEmailSecurityAllowPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareEmailSecurityAllowPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailSecurityAllowPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.comments">Comments</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference">DataCloudflareEmailSecurityAllowPolicyFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isAcceptableSender">IsAcceptableSender</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isExemptRecipient">IsExemptRecipient</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isRecipient">IsRecipient</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isRegex">IsRegex</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isSender">IsSender</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isSpoof">IsSpoof</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isTrustedSender">IsTrustedSender</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.patternType">PatternType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.verifySender">VerifySender</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Comments`<sup>Required</sup> <a name="Comments" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.comments"></a>

```go
func Comments() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.filter"></a>

```go
func Filter() DataCloudflareEmailSecurityAllowPolicyFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference">DataCloudflareEmailSecurityAllowPolicyFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsAcceptableSender`<sup>Required</sup> <a name="IsAcceptableSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isAcceptableSender"></a>

```go
func IsAcceptableSender() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IsExemptRecipient`<sup>Required</sup> <a name="IsExemptRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isExemptRecipient"></a>

```go
func IsExemptRecipient() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IsRecipient`<sup>Required</sup> <a name="IsRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isRecipient"></a>

```go
func IsRecipient() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IsRegex`<sup>Required</sup> <a name="IsRegex" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isRegex"></a>

```go
func IsRegex() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IsSender`<sup>Required</sup> <a name="IsSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isSender"></a>

```go
func IsSender() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IsSpoof`<sup>Required</sup> <a name="IsSpoof" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isSpoof"></a>

```go
func IsSpoof() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IsTrustedSender`<sup>Required</sup> <a name="IsTrustedSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isTrustedSender"></a>

```go
func IsTrustedSender() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `PatternType`<sup>Required</sup> <a name="PatternType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.patternType"></a>

```go
func PatternType() *string
```

- *Type:* *string

---

##### `VerifySender`<sup>Required</sup> <a name="VerifySender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.verifySender"></a>

```go
func VerifySender() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailSecurityAllowPolicyConfig <a name="DataCloudflareEmailSecurityAllowPolicyConfig" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflareemailsecurityallowpolicy"

&datacloudflareemailsecurityallowpolicy.DataCloudflareEmailSecurityAllowPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Filter: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter,
	PolicyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter">DataCloudflareEmailSecurityAllowPolicyFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#filter DataCloudflareEmailSecurityAllowPolicy#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.policyId">PolicyId</a></code> | <code>*string</code> | Allow policy identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#account_id DataCloudflareEmailSecurityAllowPolicy#account_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.filter"></a>

```go
Filter DataCloudflareEmailSecurityAllowPolicyFilter
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter">DataCloudflareEmailSecurityAllowPolicyFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#filter DataCloudflareEmailSecurityAllowPolicy#filter}.

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

Allow policy identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#policy_id DataCloudflareEmailSecurityAllowPolicy#policy_id}

---

### DataCloudflareEmailSecurityAllowPolicyFilter <a name="DataCloudflareEmailSecurityAllowPolicyFilter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflareemailsecurityallowpolicy"

&datacloudflareemailsecurityallowpolicy.DataCloudflareEmailSecurityAllowPolicyFilter {
	Direction: *string,
	IsAcceptableSender: interface{},
	IsExemptRecipient: interface{},
	IsTrustedSender: interface{},
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
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.direction">Direction</a></code> | <code>*string</code> | The sorting direction. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.isAcceptableSender">IsAcceptableSender</a></code> | <code>interface{}</code> | Filter to show only policies where messages from the sender are exempted from Spam, Spoof, and Bulk dispositions (not Malicious or Suspicious). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.isExemptRecipient">IsExemptRecipient</a></code> | <code>interface{}</code> | Filter to show only policies where messages to the recipient bypass all detections. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.isTrustedSender">IsTrustedSender</a></code> | <code>interface{}</code> | Filter to show only policies where messages from the sender bypass all detections and link following. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.order">Order</a></code> | <code>*string</code> | Field to sort by. Available values: "pattern", "created_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.pattern">Pattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#pattern DataCloudflareEmailSecurityAllowPolicy#pattern}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.patternType">PatternType</a></code> | <code>*string</code> | Type of pattern matching. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.search">Search</a></code> | <code>*string</code> | Search term for filtering records. Behavior may change. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.verifySender">VerifySender</a></code> | <code>interface{}</code> | Filter to show only policies that enforce DMARC, SPF, or DKIM authentication. |

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#direction DataCloudflareEmailSecurityAllowPolicy#direction}

---

##### `IsAcceptableSender`<sup>Optional</sup> <a name="IsAcceptableSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.isAcceptableSender"></a>

```go
IsAcceptableSender interface{}
```

- *Type:* interface{}

Filter to show only policies where messages from the sender are exempted from Spam, Spoof, and Bulk dispositions (not Malicious or Suspicious).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#is_acceptable_sender DataCloudflareEmailSecurityAllowPolicy#is_acceptable_sender}

---

##### `IsExemptRecipient`<sup>Optional</sup> <a name="IsExemptRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.isExemptRecipient"></a>

```go
IsExemptRecipient interface{}
```

- *Type:* interface{}

Filter to show only policies where messages to the recipient bypass all detections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#is_exempt_recipient DataCloudflareEmailSecurityAllowPolicy#is_exempt_recipient}

---

##### `IsTrustedSender`<sup>Optional</sup> <a name="IsTrustedSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.isTrustedSender"></a>

```go
IsTrustedSender interface{}
```

- *Type:* interface{}

Filter to show only policies where messages from the sender bypass all detections and link following.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#is_trusted_sender DataCloudflareEmailSecurityAllowPolicy#is_trusted_sender}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.order"></a>

```go
Order *string
```

- *Type:* *string

Field to sort by. Available values: "pattern", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#order DataCloudflareEmailSecurityAllowPolicy#order}

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#pattern DataCloudflareEmailSecurityAllowPolicy#pattern}.

---

##### `PatternType`<sup>Optional</sup> <a name="PatternType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.patternType"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#pattern_type DataCloudflareEmailSecurityAllowPolicy#pattern_type}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.search"></a>

```go
Search *string
```

- *Type:* *string

Search term for filtering records. Behavior may change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#search DataCloudflareEmailSecurityAllowPolicy#search}

---

##### `VerifySender`<sup>Optional</sup> <a name="VerifySender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.verifySender"></a>

```go
VerifySender interface{}
```

- *Type:* interface{}

Filter to show only policies that enforce DMARC, SPF, or DKIM authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#verify_sender DataCloudflareEmailSecurityAllowPolicy#verify_sender}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailSecurityAllowPolicyFilterOutputReference <a name="DataCloudflareEmailSecurityAllowPolicyFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflareemailsecurityallowpolicy"

datacloudflareemailsecurityallowpolicy.NewDataCloudflareEmailSecurityAllowPolicyFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareEmailSecurityAllowPolicyFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetIsAcceptableSender">ResetIsAcceptableSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetIsExemptRecipient">ResetIsExemptRecipient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetIsTrustedSender">ResetIsTrustedSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetPattern">ResetPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetPatternType">ResetPatternType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetSearch">ResetSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetVerifySender">ResetVerifySender</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetIsAcceptableSender` <a name="ResetIsAcceptableSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetIsAcceptableSender"></a>

```go
func ResetIsAcceptableSender()
```

##### `ResetIsExemptRecipient` <a name="ResetIsExemptRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetIsExemptRecipient"></a>

```go
func ResetIsExemptRecipient()
```

##### `ResetIsTrustedSender` <a name="ResetIsTrustedSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetIsTrustedSender"></a>

```go
func ResetIsTrustedSender()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetPattern` <a name="ResetPattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetPattern"></a>

```go
func ResetPattern()
```

##### `ResetPatternType` <a name="ResetPatternType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetPatternType"></a>

```go
func ResetPatternType()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetSearch"></a>

```go
func ResetSearch()
```

##### `ResetVerifySender` <a name="ResetVerifySender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetVerifySender"></a>

```go
func ResetVerifySender()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isAcceptableSenderInput">IsAcceptableSenderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isExemptRecipientInput">IsExemptRecipientInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isTrustedSenderInput">IsTrustedSenderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.patternTypeInput">PatternTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.searchInput">SearchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.verifySenderInput">VerifySenderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isAcceptableSender">IsAcceptableSender</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isExemptRecipient">IsExemptRecipient</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isTrustedSender">IsTrustedSender</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.patternType">PatternType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.search">Search</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.verifySender">VerifySender</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `IsAcceptableSenderInput`<sup>Optional</sup> <a name="IsAcceptableSenderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isAcceptableSenderInput"></a>

```go
func IsAcceptableSenderInput() interface{}
```

- *Type:* interface{}

---

##### `IsExemptRecipientInput`<sup>Optional</sup> <a name="IsExemptRecipientInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isExemptRecipientInput"></a>

```go
func IsExemptRecipientInput() interface{}
```

- *Type:* interface{}

---

##### `IsTrustedSenderInput`<sup>Optional</sup> <a name="IsTrustedSenderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isTrustedSenderInput"></a>

```go
func IsTrustedSenderInput() interface{}
```

- *Type:* interface{}

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `PatternTypeInput`<sup>Optional</sup> <a name="PatternTypeInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.patternTypeInput"></a>

```go
func PatternTypeInput() *string
```

- *Type:* *string

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.searchInput"></a>

```go
func SearchInput() *string
```

- *Type:* *string

---

##### `VerifySenderInput`<sup>Optional</sup> <a name="VerifySenderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.verifySenderInput"></a>

```go
func VerifySenderInput() interface{}
```

- *Type:* interface{}

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `IsAcceptableSender`<sup>Required</sup> <a name="IsAcceptableSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isAcceptableSender"></a>

```go
func IsAcceptableSender() interface{}
```

- *Type:* interface{}

---

##### `IsExemptRecipient`<sup>Required</sup> <a name="IsExemptRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isExemptRecipient"></a>

```go
func IsExemptRecipient() interface{}
```

- *Type:* interface{}

---

##### `IsTrustedSender`<sup>Required</sup> <a name="IsTrustedSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isTrustedSender"></a>

```go
func IsTrustedSender() interface{}
```

- *Type:* interface{}

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `PatternType`<sup>Required</sup> <a name="PatternType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.patternType"></a>

```go
func PatternType() *string
```

- *Type:* *string

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.search"></a>

```go
func Search() *string
```

- *Type:* *string

---

##### `VerifySender`<sup>Required</sup> <a name="VerifySender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.verifySender"></a>

```go
func VerifySender() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




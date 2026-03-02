# `dataCloudflareNotificationPolicyWebhooksList` Submodule <a name="`dataCloudflareNotificationPolicyWebhooksList` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareNotificationPolicyWebhooksList <a name="DataCloudflareNotificationPolicyWebhooksList" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/notification_policy_webhooks_list cloudflare_notification_policy_webhooks_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarenotificationpolicywebhookslist"

datacloudflarenotificationpolicywebhookslist.NewDataCloudflareNotificationPolicyWebhooksList(scope Construct, id *string, config DataCloudflareNotificationPolicyWebhooksListConfig) DataCloudflareNotificationPolicyWebhooksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig">DataCloudflareNotificationPolicyWebhooksListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig">DataCloudflareNotificationPolicyWebhooksListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.resetMaxItems">ResetMaxItems</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.resetMaxItems"></a>

```go
func ResetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareNotificationPolicyWebhooksList resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarenotificationpolicywebhookslist"

datacloudflarenotificationpolicywebhookslist.DataCloudflareNotificationPolicyWebhooksList_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarenotificationpolicywebhookslist"

datacloudflarenotificationpolicywebhookslist.DataCloudflareNotificationPolicyWebhooksList_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarenotificationpolicywebhookslist"

datacloudflarenotificationpolicywebhookslist.DataCloudflareNotificationPolicyWebhooksList_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarenotificationpolicywebhookslist"

datacloudflarenotificationpolicywebhookslist.DataCloudflareNotificationPolicyWebhooksList_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareNotificationPolicyWebhooksList resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareNotificationPolicyWebhooksList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareNotificationPolicyWebhooksList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/notification_policy_webhooks_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareNotificationPolicyWebhooksList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.result">Result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList">DataCloudflareNotificationPolicyWebhooksListResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.result"></a>

```go
func Result() DataCloudflareNotificationPolicyWebhooksListResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList">DataCloudflareNotificationPolicyWebhooksListResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksList.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareNotificationPolicyWebhooksListConfig <a name="DataCloudflareNotificationPolicyWebhooksListConfig" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarenotificationpolicywebhookslist"

&datacloudflarenotificationpolicywebhookslist.DataCloudflareNotificationPolicyWebhooksListConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	MaxItems: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account id. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/notification_policy_webhooks_list#account_id DataCloudflareNotificationPolicyWebhooksList#account_id}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/notification_policy_webhooks_list#max_items DataCloudflareNotificationPolicyWebhooksList#max_items}

---

### DataCloudflareNotificationPolicyWebhooksListResult <a name="DataCloudflareNotificationPolicyWebhooksListResult" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResult.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarenotificationpolicywebhookslist"

&datacloudflarenotificationpolicywebhookslist.DataCloudflareNotificationPolicyWebhooksListResult {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareNotificationPolicyWebhooksListResultList <a name="DataCloudflareNotificationPolicyWebhooksListResultList" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarenotificationpolicywebhookslist"

datacloudflarenotificationpolicywebhookslist.NewDataCloudflareNotificationPolicyWebhooksListResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareNotificationPolicyWebhooksListResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.get"></a>

```go
func Get(index *f64) DataCloudflareNotificationPolicyWebhooksListResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareNotificationPolicyWebhooksListResultOutputReference <a name="DataCloudflareNotificationPolicyWebhooksListResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarenotificationpolicywebhookslist"

datacloudflarenotificationpolicywebhookslist.NewDataCloudflareNotificationPolicyWebhooksListResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareNotificationPolicyWebhooksListResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.lastFailure">LastFailure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.lastSuccess">LastSuccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResult">DataCloudflareNotificationPolicyWebhooksListResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastFailure`<sup>Required</sup> <a name="LastFailure" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.lastFailure"></a>

```go
func LastFailure() *string
```

- *Type:* *string

---

##### `LastSuccess`<sup>Required</sup> <a name="LastSuccess" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.lastSuccess"></a>

```go
func LastSuccess() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareNotificationPolicyWebhooksListResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicyWebhooksList.DataCloudflareNotificationPolicyWebhooksListResult">DataCloudflareNotificationPolicyWebhooksListResult</a>

---




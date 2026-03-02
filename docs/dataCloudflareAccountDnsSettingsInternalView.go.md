# `dataCloudflareAccountDnsSettingsInternalView` Submodule <a name="`dataCloudflareAccountDnsSettingsInternalView` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAccountDnsSettingsInternalView <a name="DataCloudflareAccountDnsSettingsInternalView" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_dns_settings_internal_view cloudflare_account_dns_settings_internal_view}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaccountdnssettingsinternalview"

datacloudflareaccountdnssettingsinternalview.NewDataCloudflareAccountDnsSettingsInternalView(scope Construct, id *string, config DataCloudflareAccountDnsSettingsInternalViewConfig) DataCloudflareAccountDnsSettingsInternalView
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig">DataCloudflareAccountDnsSettingsInternalViewConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig">DataCloudflareAccountDnsSettingsInternalViewConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.resetViewId">ResetViewId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.putFilter"></a>

```go
func PutFilter(value DataCloudflareAccountDnsSettingsInternalViewFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter">DataCloudflareAccountDnsSettingsInternalViewFilter</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetViewId` <a name="ResetViewId" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.resetViewId"></a>

```go
func ResetViewId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareAccountDnsSettingsInternalView resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaccountdnssettingsinternalview"

datacloudflareaccountdnssettingsinternalview.DataCloudflareAccountDnsSettingsInternalView_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaccountdnssettingsinternalview"

datacloudflareaccountdnssettingsinternalview.DataCloudflareAccountDnsSettingsInternalView_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaccountdnssettingsinternalview"

datacloudflareaccountdnssettingsinternalview.DataCloudflareAccountDnsSettingsInternalView_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaccountdnssettingsinternalview"

datacloudflareaccountdnssettingsinternalview.DataCloudflareAccountDnsSettingsInternalView_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareAccountDnsSettingsInternalView resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareAccountDnsSettingsInternalView to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareAccountDnsSettingsInternalView that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_dns_settings_internal_view#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareAccountDnsSettingsInternalView to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference">DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.modifiedTime">ModifiedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.zones">Zones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.viewIdInput">ViewIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.viewId">ViewId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.filter"></a>

```go
func Filter() DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference">DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ModifiedTime`<sup>Required</sup> <a name="ModifiedTime" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.modifiedTime"></a>

```go
func ModifiedTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.zones"></a>

```go
func Zones() *[]*string
```

- *Type:* *[]*string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `ViewIdInput`<sup>Optional</sup> <a name="ViewIdInput" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.viewIdInput"></a>

```go
func ViewIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `ViewId`<sup>Required</sup> <a name="ViewId" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.viewId"></a>

```go
func ViewId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAccountDnsSettingsInternalViewConfig <a name="DataCloudflareAccountDnsSettingsInternalViewConfig" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaccountdnssettingsinternalview"

&datacloudflareaccountdnssettingsinternalview.DataCloudflareAccountDnsSettingsInternalViewConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Filter: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter,
	ViewId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter">DataCloudflareAccountDnsSettingsInternalViewFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_dns_settings_internal_view#filter DataCloudflareAccountDnsSettingsInternalView#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.viewId">ViewId</a></code> | <code>*string</code> | Identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_dns_settings_internal_view#account_id DataCloudflareAccountDnsSettingsInternalView#account_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.filter"></a>

```go
Filter DataCloudflareAccountDnsSettingsInternalViewFilter
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter">DataCloudflareAccountDnsSettingsInternalViewFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_dns_settings_internal_view#filter DataCloudflareAccountDnsSettingsInternalView#filter}.

---

##### `ViewId`<sup>Optional</sup> <a name="ViewId" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.viewId"></a>

```go
ViewId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_dns_settings_internal_view#view_id DataCloudflareAccountDnsSettingsInternalView#view_id}

---

### DataCloudflareAccountDnsSettingsInternalViewFilter <a name="DataCloudflareAccountDnsSettingsInternalViewFilter" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaccountdnssettingsinternalview"

&datacloudflareaccountdnssettingsinternalview.DataCloudflareAccountDnsSettingsInternalViewFilter {
	Direction: *string,
	Match: *string,
	Name: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterName,
	Order: *string,
	ZoneId: *string,
	ZoneName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter.property.direction">Direction</a></code> | <code>*string</code> | Direction to order DNS views in. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter.property.match">Match</a></code> | <code>*string</code> | Whether to match all search requirements or at least one (any). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter.property.name">Name</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterName">DataCloudflareAccountDnsSettingsInternalViewFilterName</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_dns_settings_internal_view#name DataCloudflareAccountDnsSettingsInternalView#name}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter.property.order">Order</a></code> | <code>*string</code> | Field to order DNS views by. Available values: "name", "created_on", "modified_on". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter.property.zoneId">ZoneId</a></code> | <code>*string</code> | A zone ID that exists in the zones list for the view. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter.property.zoneName">ZoneName</a></code> | <code>*string</code> | A zone name that exists in the zones list for the view. |

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Direction to order DNS views in. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_dns_settings_internal_view#direction DataCloudflareAccountDnsSettingsInternalView#direction}

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter.property.match"></a>

```go
Match *string
```

- *Type:* *string

Whether to match all search requirements or at least one (any).

If set to `all`, acts like a logical AND between filters. If set to `any`, acts like a logical OR instead.
Available values: "any", "all".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_dns_settings_internal_view#match DataCloudflareAccountDnsSettingsInternalView#match}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter.property.name"></a>

```go
Name DataCloudflareAccountDnsSettingsInternalViewFilterName
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterName">DataCloudflareAccountDnsSettingsInternalViewFilterName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_dns_settings_internal_view#name DataCloudflareAccountDnsSettingsInternalView#name}.

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter.property.order"></a>

```go
Order *string
```

- *Type:* *string

Field to order DNS views by. Available values: "name", "created_on", "modified_on".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_dns_settings_internal_view#order DataCloudflareAccountDnsSettingsInternalView#order}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

A zone ID that exists in the zones list for the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_dns_settings_internal_view#zone_id DataCloudflareAccountDnsSettingsInternalView#zone_id}

---

##### `ZoneName`<sup>Optional</sup> <a name="ZoneName" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter.property.zoneName"></a>

```go
ZoneName *string
```

- *Type:* *string

A zone name that exists in the zones list for the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_dns_settings_internal_view#zone_name DataCloudflareAccountDnsSettingsInternalView#zone_name}

---

### DataCloudflareAccountDnsSettingsInternalViewFilterName <a name="DataCloudflareAccountDnsSettingsInternalViewFilterName" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterName.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaccountdnssettingsinternalview"

&datacloudflareaccountdnssettingsinternalview.DataCloudflareAccountDnsSettingsInternalViewFilterName {
	Contains: *string,
	Endswith: *string,
	Exact: *string,
	Startswith: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterName.property.contains">Contains</a></code> | <code>*string</code> | Substring of the DNS view name. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterName.property.endswith">Endswith</a></code> | <code>*string</code> | Suffix of the DNS view name. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterName.property.exact">Exact</a></code> | <code>*string</code> | Exact value of the DNS view name. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterName.property.startswith">Startswith</a></code> | <code>*string</code> | Prefix of the DNS view name. |

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterName.property.contains"></a>

```go
Contains *string
```

- *Type:* *string

Substring of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_dns_settings_internal_view#contains DataCloudflareAccountDnsSettingsInternalView#contains}

---

##### `Endswith`<sup>Optional</sup> <a name="Endswith" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterName.property.endswith"></a>

```go
Endswith *string
```

- *Type:* *string

Suffix of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_dns_settings_internal_view#endswith DataCloudflareAccountDnsSettingsInternalView#endswith}

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterName.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

Exact value of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_dns_settings_internal_view#exact DataCloudflareAccountDnsSettingsInternalView#exact}

---

##### `Startswith`<sup>Optional</sup> <a name="Startswith" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterName.property.startswith"></a>

```go
Startswith *string
```

- *Type:* *string

Prefix of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/account_dns_settings_internal_view#startswith DataCloudflareAccountDnsSettingsInternalView#startswith}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference <a name="DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaccountdnssettingsinternalview"

datacloudflareaccountdnssettingsinternalview.NewDataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.resetEndswith">ResetEndswith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.resetStartswith">ResetStartswith</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContains` <a name="ResetContains" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.resetContains"></a>

```go
func ResetContains()
```

##### `ResetEndswith` <a name="ResetEndswith" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.resetEndswith"></a>

```go
func ResetEndswith()
```

##### `ResetExact` <a name="ResetExact" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetStartswith` <a name="ResetStartswith" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.resetStartswith"></a>

```go
func ResetStartswith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.containsInput">ContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.endswithInput">EndswithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.startswithInput">StartswithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.contains">Contains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.endswith">Endswith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.startswith">Startswith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.containsInput"></a>

```go
func ContainsInput() *string
```

- *Type:* *string

---

##### `EndswithInput`<sup>Optional</sup> <a name="EndswithInput" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.endswithInput"></a>

```go
func EndswithInput() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `StartswithInput`<sup>Optional</sup> <a name="StartswithInput" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.startswithInput"></a>

```go
func StartswithInput() *string
```

- *Type:* *string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.contains"></a>

```go
func Contains() *string
```

- *Type:* *string

---

##### `Endswith`<sup>Required</sup> <a name="Endswith" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.endswith"></a>

```go
func Endswith() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `Startswith`<sup>Required</sup> <a name="Startswith" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.startswith"></a>

```go
func Startswith() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference <a name="DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareaccountdnssettingsinternalview"

datacloudflareaccountdnssettingsinternalview.NewDataCloudflareAccountDnsSettingsInternalViewFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.putName">PutName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.resetMatch">ResetMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.resetZoneId">ResetZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.resetZoneName">ResetZoneName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutName` <a name="PutName" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.putName"></a>

```go
func PutName(value DataCloudflareAccountDnsSettingsInternalViewFilterName)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.putName.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterName">DataCloudflareAccountDnsSettingsInternalViewFilterName</a>

---

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetMatch` <a name="ResetMatch" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.resetMatch"></a>

```go
func ResetMatch()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.resetZoneId"></a>

```go
func ResetZoneId()
```

##### `ResetZoneName` <a name="ResetZoneName" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.resetZoneName"></a>

```go
func ResetZoneName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.name">Name</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference">DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.matchInput">MatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.nameInput">NameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.zoneNameInput">ZoneNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.match">Match</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.zoneName">ZoneName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.name"></a>

```go
func Name() DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference">DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference</a>

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.matchInput"></a>

```go
func MatchInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.nameInput"></a>

```go
func NameInput() interface{}
```

- *Type:* interface{}

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `ZoneNameInput`<sup>Optional</sup> <a name="ZoneNameInput" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.zoneNameInput"></a>

```go
func ZoneNameInput() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.match"></a>

```go
func Match() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

##### `ZoneName`<sup>Required</sup> <a name="ZoneName" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.zoneName"></a>

```go
func ZoneName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




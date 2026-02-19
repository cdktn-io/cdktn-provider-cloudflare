# `dataCloudflareWaitingRoomSettings` Submodule <a name="`dataCloudflareWaitingRoomSettings` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWaitingRoomSettings <a name="DataCloudflareWaitingRoomSettings" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/waiting_room_settings cloudflare_waiting_room_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarewaitingroomsettings"

datacloudflarewaitingroomsettings.NewDataCloudflareWaitingRoomSettings(scope Construct, id *string, config DataCloudflareWaitingRoomSettingsConfig) DataCloudflareWaitingRoomSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettingsConfig">DataCloudflareWaitingRoomSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettingsConfig">DataCloudflareWaitingRoomSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareWaitingRoomSettings resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarewaitingroomsettings"

datacloudflarewaitingroomsettings.DataCloudflareWaitingRoomSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarewaitingroomsettings"

datacloudflarewaitingroomsettings.DataCloudflareWaitingRoomSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarewaitingroomsettings"

datacloudflarewaitingroomsettings.DataCloudflareWaitingRoomSettings_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarewaitingroomsettings"

datacloudflarewaitingroomsettings.DataCloudflareWaitingRoomSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareWaitingRoomSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareWaitingRoomSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareWaitingRoomSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/waiting_room_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareWaitingRoomSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.searchEngineCrawlerBypass">SearchEngineCrawlerBypass</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SearchEngineCrawlerBypass`<sup>Required</sup> <a name="SearchEngineCrawlerBypass" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.searchEngineCrawlerBypass"></a>

```go
func SearchEngineCrawlerBypass() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWaitingRoomSettingsConfig <a name="DataCloudflareWaitingRoomSettingsConfig" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettingsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarewaitingroomsettings"

&datacloudflarewaitingroomsettings.DataCloudflareWaitingRoomSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettingsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettingsConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomSettings.DataCloudflareWaitingRoomSettingsConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/waiting_room_settings#zone_id DataCloudflareWaitingRoomSettings#zone_id}

---




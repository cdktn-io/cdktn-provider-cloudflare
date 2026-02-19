# `dataCloudflareZoneDnsSettings` Submodule <a name="`dataCloudflareZoneDnsSettings` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZoneDnsSettings <a name="DataCloudflareZoneDnsSettings" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zone_dns_settings cloudflare_zone_dns_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarezonednssettings"

datacloudflarezonednssettings.NewDataCloudflareZoneDnsSettings(scope Construct, id *string, config DataCloudflareZoneDnsSettingsConfig) DataCloudflareZoneDnsSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig">DataCloudflareZoneDnsSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig">DataCloudflareZoneDnsSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZoneDnsSettings resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarezonednssettings"

datacloudflarezonednssettings.DataCloudflareZoneDnsSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarezonednssettings"

datacloudflarezonednssettings.DataCloudflareZoneDnsSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarezonednssettings"

datacloudflarezonednssettings.DataCloudflareZoneDnsSettings_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarezonednssettings"

datacloudflarezonednssettings.DataCloudflareZoneDnsSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareZoneDnsSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareZoneDnsSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareZoneDnsSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zone_dns_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZoneDnsSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.flattenAllCnames">FlattenAllCnames</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.foundationDns">FoundationDns</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.internalDns">InternalDns</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference">DataCloudflareZoneDnsSettingsInternalDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.multiProvider">MultiProvider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.nameservers">Nameservers</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference">DataCloudflareZoneDnsSettingsNameserversOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.nsTtl">NsTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.secondaryOverrides">SecondaryOverrides</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.soa">Soa</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference">DataCloudflareZoneDnsSettingsSoaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.zoneMode">ZoneMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `FlattenAllCnames`<sup>Required</sup> <a name="FlattenAllCnames" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.flattenAllCnames"></a>

```go
func FlattenAllCnames() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `FoundationDns`<sup>Required</sup> <a name="FoundationDns" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.foundationDns"></a>

```go
func FoundationDns() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalDns`<sup>Required</sup> <a name="InternalDns" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.internalDns"></a>

```go
func InternalDns() DataCloudflareZoneDnsSettingsInternalDnsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference">DataCloudflareZoneDnsSettingsInternalDnsOutputReference</a>

---

##### `MultiProvider`<sup>Required</sup> <a name="MultiProvider" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.multiProvider"></a>

```go
func MultiProvider() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Nameservers`<sup>Required</sup> <a name="Nameservers" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.nameservers"></a>

```go
func Nameservers() DataCloudflareZoneDnsSettingsNameserversOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference">DataCloudflareZoneDnsSettingsNameserversOutputReference</a>

---

##### `NsTtl`<sup>Required</sup> <a name="NsTtl" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.nsTtl"></a>

```go
func NsTtl() *f64
```

- *Type:* *f64

---

##### `SecondaryOverrides`<sup>Required</sup> <a name="SecondaryOverrides" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.secondaryOverrides"></a>

```go
func SecondaryOverrides() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Soa`<sup>Required</sup> <a name="Soa" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.soa"></a>

```go
func Soa() DataCloudflareZoneDnsSettingsSoaOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference">DataCloudflareZoneDnsSettingsSoaOutputReference</a>

---

##### `ZoneMode`<sup>Required</sup> <a name="ZoneMode" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.zoneMode"></a>

```go
func ZoneMode() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZoneDnsSettingsConfig <a name="DataCloudflareZoneDnsSettingsConfig" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarezonednssettings"

&datacloudflarezonednssettings.DataCloudflareZoneDnsSettingsConfig {
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
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zone_dns_settings#zone_id DataCloudflareZoneDnsSettings#zone_id}

---

### DataCloudflareZoneDnsSettingsInternalDns <a name="DataCloudflareZoneDnsSettingsInternalDns" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDns.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarezonednssettings"

&datacloudflarezonednssettings.DataCloudflareZoneDnsSettingsInternalDns {

}
```


### DataCloudflareZoneDnsSettingsNameservers <a name="DataCloudflareZoneDnsSettingsNameservers" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameservers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameservers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarezonednssettings"

&datacloudflarezonednssettings.DataCloudflareZoneDnsSettingsNameservers {

}
```


### DataCloudflareZoneDnsSettingsSoa <a name="DataCloudflareZoneDnsSettingsSoa" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoa"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoa.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarezonednssettings"

&datacloudflarezonednssettings.DataCloudflareZoneDnsSettingsSoa {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZoneDnsSettingsInternalDnsOutputReference <a name="DataCloudflareZoneDnsSettingsInternalDnsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarezonednssettings"

datacloudflarezonednssettings.NewDataCloudflareZoneDnsSettingsInternalDnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZoneDnsSettingsInternalDnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.property.referenceZoneId">ReferenceZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDns">DataCloudflareZoneDnsSettingsInternalDns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReferenceZoneId`<sup>Required</sup> <a name="ReferenceZoneId" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.property.referenceZoneId"></a>

```go
func ReferenceZoneId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZoneDnsSettingsInternalDns
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsInternalDns">DataCloudflareZoneDnsSettingsInternalDns</a>

---


### DataCloudflareZoneDnsSettingsNameserversOutputReference <a name="DataCloudflareZoneDnsSettingsNameserversOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarezonednssettings"

datacloudflarezonednssettings.NewDataCloudflareZoneDnsSettingsNameserversOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZoneDnsSettingsNameserversOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.property.nsSet">NsSet</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameservers">DataCloudflareZoneDnsSettingsNameservers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NsSet`<sup>Required</sup> <a name="NsSet" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.property.nsSet"></a>

```go
func NsSet() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameserversOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZoneDnsSettingsNameservers
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsNameservers">DataCloudflareZoneDnsSettingsNameservers</a>

---


### DataCloudflareZoneDnsSettingsSoaOutputReference <a name="DataCloudflareZoneDnsSettingsSoaOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarezonednssettings"

datacloudflarezonednssettings.NewDataCloudflareZoneDnsSettingsSoaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZoneDnsSettingsSoaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.expire">Expire</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.minTtl">MinTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.mname">Mname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.refresh">Refresh</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.retry">Retry</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.rname">Rname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoa">DataCloudflareZoneDnsSettingsSoa</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expire`<sup>Required</sup> <a name="Expire" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.expire"></a>

```go
func Expire() *f64
```

- *Type:* *f64

---

##### `MinTtl`<sup>Required</sup> <a name="MinTtl" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.minTtl"></a>

```go
func MinTtl() *f64
```

- *Type:* *f64

---

##### `Mname`<sup>Required</sup> <a name="Mname" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.mname"></a>

```go
func Mname() *string
```

- *Type:* *string

---

##### `Refresh`<sup>Required</sup> <a name="Refresh" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.refresh"></a>

```go
func Refresh() *f64
```

- *Type:* *f64

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.retry"></a>

```go
func Retry() *f64
```

- *Type:* *f64

---

##### `Rname`<sup>Required</sup> <a name="Rname" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.rname"></a>

```go
func Rname() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZoneDnsSettingsSoa
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZoneDnsSettings.DataCloudflareZoneDnsSettingsSoa">DataCloudflareZoneDnsSettingsSoa</a>

---




# `dataCloudflareZeroTrustTunnelWarpConnectorConfig` Submodule <a name="`dataCloudflareZeroTrustTunnelWarpConnectorConfig` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustTunnelWarpConnectorConfigA <a name="DataCloudflareZeroTrustTunnelWarpConnectorConfigA" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_tunnel_warp_connector_config cloudflare_zero_trust_tunnel_warp_connector_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrusttunnelwarpconnectorconfig"

datacloudflarezerotrusttunnelwarpconnectorconfig.NewDataCloudflareZeroTrustTunnelWarpConnectorConfigA(scope Construct, id *string, config DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig) DataCloudflareZeroTrustTunnelWarpConnectorConfigA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig">DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig">DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustTunnelWarpConnectorConfigA resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrusttunnelwarpconnectorconfig"

datacloudflarezerotrusttunnelwarpconnectorconfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrusttunnelwarpconnectorconfig"

datacloudflarezerotrusttunnelwarpconnectorconfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrusttunnelwarpconnectorconfig"

datacloudflarezerotrusttunnelwarpconnectorconfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrusttunnelwarpconnectorconfig"

datacloudflarezerotrusttunnelwarpconnectorconfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareZeroTrustTunnelWarpConnectorConfigA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareZeroTrustTunnelWarpConnectorConfigA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareZeroTrustTunnelWarpConnectorConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_tunnel_warp_connector_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustTunnelWarpConnectorConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.configurationVersion">ConfigurationVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.haMode">HaMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.tunnelIdInput">TunnelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.tunnelId">TunnelId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.config"></a>

```go
func Config() DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference</a>

---

##### `ConfigurationVersion`<sup>Required</sup> <a name="ConfigurationVersion" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.configurationVersion"></a>

```go
func ConfigurationVersion() *f64
```

- *Type:* *f64

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `HaMode`<sup>Required</sup> <a name="HaMode" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.haMode"></a>

```go
func HaMode() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `TunnelIdInput`<sup>Optional</sup> <a name="TunnelIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.tunnelIdInput"></a>

```go
func TunnelIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.tunnelId"></a>

```go
func TunnelId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig <a name="DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrusttunnelwarpconnectorconfig"

&datacloudflarezerotrusttunnelwarpconnectorconfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	TunnelId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.tunnelId">TunnelId</a></code> | <code>*string</code> | UUID of the tunnel. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_tunnel_warp_connector_config#account_id DataCloudflareZeroTrustTunnelWarpConnectorConfigA#account_id}

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.tunnelId"></a>

```go
TunnelId *string
```

- *Type:* *string

UUID of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_tunnel_warp_connector_config#tunnel_id DataCloudflareZeroTrustTunnelWarpConnectorConfigA#tunnel_id}

---

### DataCloudflareZeroTrustTunnelWarpConnectorConfigConfig <a name="DataCloudflareZeroTrustTunnelWarpConnectorConfigConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrusttunnelwarpconnectorconfig"

&datacloudflarezerotrusttunnelwarpconnectorconfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfig {

}
```


### DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVips <a name="DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVips" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVips"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVips.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrusttunnelwarpconnectorconfig"

&datacloudflarezerotrusttunnelwarpconnectorconfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVips {

}
```


### DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious <a name="DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrusttunnelwarpconnectorconfig"

&datacloudflarezerotrusttunnelwarpconnectorconfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference <a name="DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrusttunnelwarpconnectorconfig"

datacloudflarezerotrusttunnelwarpconnectorconfig.NewDataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.fnrId">FnrId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vips">Vips</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vipsPrevious">VipsPrevious</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfig">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FnrId`<sup>Required</sup> <a name="FnrId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.fnrId"></a>

```go
func FnrId() *string
```

- *Type:* *string

---

##### `Vips`<sup>Required</sup> <a name="Vips" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vips"></a>

```go
func Vips() DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList</a>

---

##### `VipsPrevious`<sup>Required</sup> <a name="VipsPrevious" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vipsPrevious"></a>

```go
func VipsPrevious() DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustTunnelWarpConnectorConfigConfig
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfig">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfig</a>

---


### DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList <a name="DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrusttunnelwarpconnectorconfig"

datacloudflarezerotrusttunnelwarpconnectorconfig.NewDataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.get"></a>

```go
func Get(index *f64) DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference <a name="DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrusttunnelwarpconnectorconfig"

datacloudflarezerotrusttunnelwarpconnectorconfig.NewDataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVips">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVips</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVips
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVips">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVips</a>

---


### DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList <a name="DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrusttunnelwarpconnectorconfig"

datacloudflarezerotrusttunnelwarpconnectorconfig.NewDataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.get"></a>

```go
func Get(index *f64) DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference <a name="DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrusttunnelwarpconnectorconfig"

datacloudflarezerotrusttunnelwarpconnectorconfig.NewDataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious</a>

---




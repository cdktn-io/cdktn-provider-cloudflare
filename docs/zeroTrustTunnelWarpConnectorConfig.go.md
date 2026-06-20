# `zeroTrustTunnelWarpConnectorConfig` Submodule <a name="`zeroTrustTunnelWarpConnectorConfig` Submodule" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustTunnelWarpConnectorConfigA <a name="ZeroTrustTunnelWarpConnectorConfigA" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_tunnel_warp_connector_config cloudflare_zero_trust_tunnel_warp_connector_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/zerotrusttunnelwarpconnectorconfig"

zerotrusttunnelwarpconnectorconfig.NewZeroTrustTunnelWarpConnectorConfigA(scope Construct, id *string, config ZeroTrustTunnelWarpConnectorConfigAConfig) ZeroTrustTunnelWarpConnectorConfigA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig">ZeroTrustTunnelWarpConnectorConfigAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig">ZeroTrustTunnelWarpConnectorConfigAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.resetConfig">ResetConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.putConfig"></a>

```go
func PutConfig(value ZeroTrustTunnelWarpConnectorConfigConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig">ZeroTrustTunnelWarpConnectorConfigConfig</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.resetConfig"></a>

```go
func ResetConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustTunnelWarpConnectorConfigA resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/zerotrusttunnelwarpconnectorconfig"

zerotrusttunnelwarpconnectorconfig.ZeroTrustTunnelWarpConnectorConfigA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/zerotrusttunnelwarpconnectorconfig"

zerotrusttunnelwarpconnectorconfig.ZeroTrustTunnelWarpConnectorConfigA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/zerotrusttunnelwarpconnectorconfig"

zerotrusttunnelwarpconnectorconfig.ZeroTrustTunnelWarpConnectorConfigA_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/zerotrusttunnelwarpconnectorconfig"

zerotrusttunnelwarpconnectorconfig.ZeroTrustTunnelWarpConnectorConfigA_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ZeroTrustTunnelWarpConnectorConfigA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ZeroTrustTunnelWarpConnectorConfigA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ZeroTrustTunnelWarpConnectorConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_tunnel_warp_connector_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustTunnelWarpConnectorConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference">ZeroTrustTunnelWarpConnectorConfigConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.configurationVersion">ConfigurationVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.configInput">ConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.haModeInput">HaModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.tunnelIdInput">TunnelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.haMode">HaMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.tunnelId">TunnelId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.config"></a>

```go
func Config() ZeroTrustTunnelWarpConnectorConfigConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference">ZeroTrustTunnelWarpConnectorConfigConfigOutputReference</a>

---

##### `ConfigurationVersion`<sup>Required</sup> <a name="ConfigurationVersion" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.configurationVersion"></a>

```go
func ConfigurationVersion() *f64
```

- *Type:* *f64

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.configInput"></a>

```go
func ConfigInput() interface{}
```

- *Type:* interface{}

---

##### `HaModeInput`<sup>Optional</sup> <a name="HaModeInput" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.haModeInput"></a>

```go
func HaModeInput() *string
```

- *Type:* *string

---

##### `TunnelIdInput`<sup>Optional</sup> <a name="TunnelIdInput" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.tunnelIdInput"></a>

```go
func TunnelIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `HaMode`<sup>Required</sup> <a name="HaMode" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.haMode"></a>

```go
func HaMode() *string
```

- *Type:* *string

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.tunnelId"></a>

```go
func TunnelId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustTunnelWarpConnectorConfigAConfig <a name="ZeroTrustTunnelWarpConnectorConfigAConfig" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/zerotrusttunnelwarpconnectorconfig"

&zerotrusttunnelwarpconnectorconfig.ZeroTrustTunnelWarpConnectorConfigAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	HaMode: *string,
	TunnelId: *string,
	Config: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.haMode">HaMode</a></code> | <code>*string</code> | High-availability mode for the WARP Connector tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.tunnelId">TunnelId</a></code> | <code>*string</code> | UUID of the tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig">ZeroTrustTunnelWarpConnectorConfigConfig</a></code> | Provider-specific configuration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_tunnel_warp_connector_config#account_id ZeroTrustTunnelWarpConnectorConfigA#account_id}

---

##### `HaMode`<sup>Required</sup> <a name="HaMode" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.haMode"></a>

```go
HaMode *string
```

- *Type:* *string

High-availability mode for the WARP Connector tunnel.

`none` means HA is enabled but no provider is configured yet (newly created tunnels default to this). `disabled` means HA is explicitly turned off. `aws` uses AWS ENI move for failover. `local` uses virtual IPs (VIPs) on the local interface.
Available values: "none", "disabled", "aws", "local".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_tunnel_warp_connector_config#ha_mode ZeroTrustTunnelWarpConnectorConfigA#ha_mode}

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.tunnelId"></a>

```go
TunnelId *string
```

- *Type:* *string

UUID of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_tunnel_warp_connector_config#tunnel_id ZeroTrustTunnelWarpConnectorConfigA#tunnel_id}

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.config"></a>

```go
Config ZeroTrustTunnelWarpConnectorConfigConfig
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig">ZeroTrustTunnelWarpConnectorConfigConfig</a>

Provider-specific configuration.

Required shape depends on ha_mode. For `aws`, must contain `fnr_id`. For `local`, must contain `vips`. For `none` and `disabled`, must be empty or omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_tunnel_warp_connector_config#config ZeroTrustTunnelWarpConnectorConfigA#config}

---

### ZeroTrustTunnelWarpConnectorConfigConfig <a name="ZeroTrustTunnelWarpConnectorConfigConfig" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/zerotrusttunnelwarpconnectorconfig"

&zerotrusttunnelwarpconnectorconfig.ZeroTrustTunnelWarpConnectorConfigConfig {
	FnrId: *string,
	Vips: interface{},
	VipsPrevious: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig.property.fnrId">FnrId</a></code> | <code>*string</code> | Floating Network Resource ID — the secondary ENI that is moved between nodes on failover. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig.property.vips">Vips</a></code> | <code>interface{}</code> | VIPs to assign on the CloudflareWARP interface. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig.property.vipsPrevious">VipsPrevious</a></code> | <code>interface{}</code> | VIPs to clean up on demotion or version drift. |

---

##### `FnrId`<sup>Optional</sup> <a name="FnrId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig.property.fnrId"></a>

```go
FnrId *string
```

- *Type:* *string

Floating Network Resource ID — the secondary ENI that is moved between nodes on failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_tunnel_warp_connector_config#fnr_id ZeroTrustTunnelWarpConnectorConfigA#fnr_id}

---

##### `Vips`<sup>Optional</sup> <a name="Vips" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig.property.vips"></a>

```go
Vips interface{}
```

- *Type:* interface{}

VIPs to assign on the CloudflareWARP interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_tunnel_warp_connector_config#vips ZeroTrustTunnelWarpConnectorConfigA#vips}

---

##### `VipsPrevious`<sup>Optional</sup> <a name="VipsPrevious" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig.property.vipsPrevious"></a>

```go
VipsPrevious interface{}
```

- *Type:* interface{}

VIPs to clean up on demotion or version drift.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_tunnel_warp_connector_config#vips_previous ZeroTrustTunnelWarpConnectorConfigA#vips_previous}

---

### ZeroTrustTunnelWarpConnectorConfigConfigVips <a name="ZeroTrustTunnelWarpConnectorConfigConfigVips" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVips"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVips.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/zerotrusttunnelwarpconnectorconfig"

&zerotrusttunnelwarpconnectorconfig.ZeroTrustTunnelWarpConnectorConfigConfigVips {
	Address: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVips.property.address">Address</a></code> | <code>*string</code> | Virtual IP address (IPv4 or IPv6). |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVips.property.address"></a>

```go
Address *string
```

- *Type:* *string

Virtual IP address (IPv4 or IPv6).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_tunnel_warp_connector_config#address ZeroTrustTunnelWarpConnectorConfigA#address}

---

### ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious <a name="ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/zerotrusttunnelwarpconnectorconfig"

&zerotrusttunnelwarpconnectorconfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious {
	Address: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious.property.address">Address</a></code> | <code>*string</code> | Virtual IP address (IPv4 or IPv6). |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious.property.address"></a>

```go
Address *string
```

- *Type:* *string

Virtual IP address (IPv4 or IPv6).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_tunnel_warp_connector_config#address ZeroTrustTunnelWarpConnectorConfigA#address}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustTunnelWarpConnectorConfigConfigOutputReference <a name="ZeroTrustTunnelWarpConnectorConfigConfigOutputReference" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/zerotrusttunnelwarpconnectorconfig"

zerotrusttunnelwarpconnectorconfig.NewZeroTrustTunnelWarpConnectorConfigConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustTunnelWarpConnectorConfigConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.putVips">PutVips</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.putVipsPrevious">PutVipsPrevious</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resetFnrId">ResetFnrId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resetVips">ResetVips</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resetVipsPrevious">ResetVipsPrevious</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVips` <a name="PutVips" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.putVips"></a>

```go
func PutVips(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.putVips.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVipsPrevious` <a name="PutVipsPrevious" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.putVipsPrevious"></a>

```go
func PutVipsPrevious(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.putVipsPrevious.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFnrId` <a name="ResetFnrId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resetFnrId"></a>

```go
func ResetFnrId()
```

##### `ResetVips` <a name="ResetVips" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resetVips"></a>

```go
func ResetVips()
```

##### `ResetVipsPrevious` <a name="ResetVipsPrevious" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resetVipsPrevious"></a>

```go
func ResetVipsPrevious()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vips">Vips</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList">ZeroTrustTunnelWarpConnectorConfigConfigVipsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vipsPrevious">VipsPrevious</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList">ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.fnrIdInput">FnrIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vipsInput">VipsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vipsPreviousInput">VipsPreviousInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.fnrId">FnrId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Vips`<sup>Required</sup> <a name="Vips" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vips"></a>

```go
func Vips() ZeroTrustTunnelWarpConnectorConfigConfigVipsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList">ZeroTrustTunnelWarpConnectorConfigConfigVipsList</a>

---

##### `VipsPrevious`<sup>Required</sup> <a name="VipsPrevious" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vipsPrevious"></a>

```go
func VipsPrevious() ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList">ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList</a>

---

##### `FnrIdInput`<sup>Optional</sup> <a name="FnrIdInput" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.fnrIdInput"></a>

```go
func FnrIdInput() *string
```

- *Type:* *string

---

##### `VipsInput`<sup>Optional</sup> <a name="VipsInput" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vipsInput"></a>

```go
func VipsInput() interface{}
```

- *Type:* interface{}

---

##### `VipsPreviousInput`<sup>Optional</sup> <a name="VipsPreviousInput" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vipsPreviousInput"></a>

```go
func VipsPreviousInput() interface{}
```

- *Type:* interface{}

---

##### `FnrId`<sup>Required</sup> <a name="FnrId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.fnrId"></a>

```go
func FnrId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustTunnelWarpConnectorConfigConfigVipsList <a name="ZeroTrustTunnelWarpConnectorConfigConfigVipsList" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/zerotrusttunnelwarpconnectorconfig"

zerotrusttunnelwarpconnectorconfig.NewZeroTrustTunnelWarpConnectorConfigConfigVipsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustTunnelWarpConnectorConfigConfigVipsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.get"></a>

```go
func Get(index *f64) ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference <a name="ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/zerotrusttunnelwarpconnectorconfig"

zerotrusttunnelwarpconnectorconfig.NewZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList <a name="ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/zerotrusttunnelwarpconnectorconfig"

zerotrusttunnelwarpconnectorconfig.NewZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.get"></a>

```go
func Get(index *f64) ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference <a name="ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/zerotrusttunnelwarpconnectorconfig"

zerotrusttunnelwarpconnectorconfig.NewZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




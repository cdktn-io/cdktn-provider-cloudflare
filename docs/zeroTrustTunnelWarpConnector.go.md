# `zeroTrustTunnelWarpConnector` Submodule <a name="`zeroTrustTunnelWarpConnector` Submodule" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustTunnelWarpConnector <a name="ZeroTrustTunnelWarpConnector" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_tunnel_warp_connector cloudflare_zero_trust_tunnel_warp_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrusttunnelwarpconnector"

zerotrusttunnelwarpconnector.NewZeroTrustTunnelWarpConnector(scope Construct, id *string, config ZeroTrustTunnelWarpConnectorConfig) ZeroTrustTunnelWarpConnector
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig">ZeroTrustTunnelWarpConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig">ZeroTrustTunnelWarpConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.resetTunnelSecret">ResetTunnelSecret</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetTunnelSecret` <a name="ResetTunnelSecret" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.resetTunnelSecret"></a>

```go
func ResetTunnelSecret()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustTunnelWarpConnector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrusttunnelwarpconnector"

zerotrusttunnelwarpconnector.ZeroTrustTunnelWarpConnector_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrusttunnelwarpconnector"

zerotrusttunnelwarpconnector.ZeroTrustTunnelWarpConnector_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrusttunnelwarpconnector"

zerotrusttunnelwarpconnector.ZeroTrustTunnelWarpConnector_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrusttunnelwarpconnector"

zerotrusttunnelwarpconnector.ZeroTrustTunnelWarpConnector_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ZeroTrustTunnelWarpConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ZeroTrustTunnelWarpConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ZeroTrustTunnelWarpConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_tunnel_warp_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustTunnelWarpConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.accountTag">AccountTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.connections">Connections</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList">ZeroTrustTunnelWarpConnectorConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.connsActiveAt">ConnsActiveAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.connsInactiveAt">ConnsInactiveAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.deletedAt">DeletedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.metadata">Metadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.tunType">TunType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.tunnelSecretInput">TunnelSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.tunnelSecret">TunnelSecret</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountTag`<sup>Required</sup> <a name="AccountTag" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.accountTag"></a>

```go
func AccountTag() *string
```

- *Type:* *string

---

##### `Connections`<sup>Required</sup> <a name="Connections" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.connections"></a>

```go
func Connections() ZeroTrustTunnelWarpConnectorConnectionsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList">ZeroTrustTunnelWarpConnectorConnectionsList</a>

---

##### `ConnsActiveAt`<sup>Required</sup> <a name="ConnsActiveAt" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.connsActiveAt"></a>

```go
func ConnsActiveAt() *string
```

- *Type:* *string

---

##### `ConnsInactiveAt`<sup>Required</sup> <a name="ConnsInactiveAt" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.connsInactiveAt"></a>

```go
func ConnsInactiveAt() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DeletedAt`<sup>Required</sup> <a name="DeletedAt" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.deletedAt"></a>

```go
func DeletedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.metadata"></a>

```go
func Metadata() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TunType`<sup>Required</sup> <a name="TunType" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.tunType"></a>

```go
func TunType() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TunnelSecretInput`<sup>Optional</sup> <a name="TunnelSecretInput" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.tunnelSecretInput"></a>

```go
func TunnelSecretInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TunnelSecret`<sup>Required</sup> <a name="TunnelSecret" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.tunnelSecret"></a>

```go
func TunnelSecret() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustTunnelWarpConnectorConfig <a name="ZeroTrustTunnelWarpConnectorConfig" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrusttunnelwarpconnector"

&zerotrusttunnelwarpconnector.ZeroTrustTunnelWarpConnectorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Name: *string,
	TunnelSecret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Cloudflare account ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.name">Name</a></code> | <code>*string</code> | A user-friendly name for a tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.tunnelSecret">TunnelSecret</a></code> | <code>*string</code> | Sets the password required to run a locally-managed tunnel. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_tunnel_warp_connector#account_id ZeroTrustTunnelWarpConnector#account_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A user-friendly name for a tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_tunnel_warp_connector#name ZeroTrustTunnelWarpConnector#name}

---

##### `TunnelSecret`<sup>Optional</sup> <a name="TunnelSecret" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.tunnelSecret"></a>

```go
TunnelSecret *string
```

- *Type:* *string

Sets the password required to run a locally-managed tunnel.

Must be at least 32 bytes and encoded as a base64 string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_tunnel_warp_connector#tunnel_secret ZeroTrustTunnelWarpConnector#tunnel_secret}

---

### ZeroTrustTunnelWarpConnectorConnections <a name="ZeroTrustTunnelWarpConnectorConnections" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnections.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrusttunnelwarpconnector"

&zerotrusttunnelwarpconnector.ZeroTrustTunnelWarpConnectorConnections {

}
```


## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustTunnelWarpConnectorConnectionsList <a name="ZeroTrustTunnelWarpConnectorConnectionsList" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrusttunnelwarpconnector"

zerotrusttunnelwarpconnector.NewZeroTrustTunnelWarpConnectorConnectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustTunnelWarpConnectorConnectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.get"></a>

```go
func Get(index *f64) ZeroTrustTunnelWarpConnectorConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ZeroTrustTunnelWarpConnectorConnectionsOutputReference <a name="ZeroTrustTunnelWarpConnectorConnectionsOutputReference" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrusttunnelwarpconnector"

zerotrusttunnelwarpconnector.NewZeroTrustTunnelWarpConnectorConnectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustTunnelWarpConnectorConnectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.clientVersion">ClientVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.coloName">ColoName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.isPendingReconnect">IsPendingReconnect</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.openedAt">OpenedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.originIp">OriginIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnections">ZeroTrustTunnelWarpConnectorConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientVersion`<sup>Required</sup> <a name="ClientVersion" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.clientVersion"></a>

```go
func ClientVersion() *string
```

- *Type:* *string

---

##### `ColoName`<sup>Required</sup> <a name="ColoName" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.coloName"></a>

```go
func ColoName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsPendingReconnect`<sup>Required</sup> <a name="IsPendingReconnect" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.isPendingReconnect"></a>

```go
func IsPendingReconnect() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `OpenedAt`<sup>Required</sup> <a name="OpenedAt" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.openedAt"></a>

```go
func OpenedAt() *string
```

- *Type:* *string

---

##### `OriginIp`<sup>Required</sup> <a name="OriginIp" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.originIp"></a>

```go
func OriginIp() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() ZeroTrustTunnelWarpConnectorConnections
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnections">ZeroTrustTunnelWarpConnectorConnections</a>

---




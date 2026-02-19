# `zeroTrustGatewayProxyEndpoint` Submodule <a name="`zeroTrustGatewayProxyEndpoint` Submodule" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustGatewayProxyEndpoint <a name="ZeroTrustGatewayProxyEndpoint" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_gateway_proxy_endpoint cloudflare_zero_trust_gateway_proxy_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustgatewayproxyendpoint"

zerotrustgatewayproxyendpoint.NewZeroTrustGatewayProxyEndpoint(scope Construct, id *string, config ZeroTrustGatewayProxyEndpointConfig) ZeroTrustGatewayProxyEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpointConfig">ZeroTrustGatewayProxyEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpointConfig">ZeroTrustGatewayProxyEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.resetIps">ResetIps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.resetKind">ResetKind</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetIps` <a name="ResetIps" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.resetIps"></a>

```go
func ResetIps()
```

##### `ResetKind` <a name="ResetKind" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.resetKind"></a>

```go
func ResetKind()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustGatewayProxyEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustgatewayproxyendpoint"

zerotrustgatewayproxyendpoint.ZeroTrustGatewayProxyEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustgatewayproxyendpoint"

zerotrustgatewayproxyendpoint.ZeroTrustGatewayProxyEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustgatewayproxyendpoint"

zerotrustgatewayproxyendpoint.ZeroTrustGatewayProxyEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustgatewayproxyendpoint"

zerotrustgatewayproxyendpoint.ZeroTrustGatewayProxyEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ZeroTrustGatewayProxyEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ZeroTrustGatewayProxyEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ZeroTrustGatewayProxyEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_gateway_proxy_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustGatewayProxyEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.subdomain">Subdomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.ipsInput">IpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.ips">Ips</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Subdomain`<sup>Required</sup> <a name="Subdomain" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.subdomain"></a>

```go
func Subdomain() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `IpsInput`<sup>Optional</sup> <a name="IpsInput" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.ipsInput"></a>

```go
func IpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.ips"></a>

```go
func Ips() *[]*string
```

- *Type:* *[]*string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustGatewayProxyEndpointConfig <a name="ZeroTrustGatewayProxyEndpointConfig" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrustgatewayproxyendpoint"

&zerotrustgatewayproxyendpoint.ZeroTrustGatewayProxyEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Name: *string,
	Ips: *[]*string,
	Kind: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpointConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_gateway_proxy_endpoint#account_id ZeroTrustGatewayProxyEndpoint#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpointConfig.property.name">Name</a></code> | <code>*string</code> | Specify the name of the proxy endpoint. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpointConfig.property.ips">Ips</a></code> | <code>*[]*string</code> | Specify the list of CIDRs to restrict ingress connections. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpointConfig.property.kind">Kind</a></code> | <code>*string</code> | The proxy endpoint kind Available values: "ip", "identity". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpointConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_gateway_proxy_endpoint#account_id ZeroTrustGatewayProxyEndpoint#account_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpointConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specify the name of the proxy endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_gateway_proxy_endpoint#name ZeroTrustGatewayProxyEndpoint#name}

---

##### `Ips`<sup>Optional</sup> <a name="Ips" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpointConfig.property.ips"></a>

```go
Ips *[]*string
```

- *Type:* *[]*string

Specify the list of CIDRs to restrict ingress connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_gateway_proxy_endpoint#ips ZeroTrustGatewayProxyEndpoint#ips}

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="@cdktn/provider-cloudflare.zeroTrustGatewayProxyEndpoint.ZeroTrustGatewayProxyEndpointConfig.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

The proxy endpoint kind Available values: "ip", "identity".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_gateway_proxy_endpoint#kind ZeroTrustGatewayProxyEndpoint#kind}

---




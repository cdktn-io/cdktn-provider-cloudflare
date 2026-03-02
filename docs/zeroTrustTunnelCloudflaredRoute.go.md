# `zeroTrustTunnelCloudflaredRoute` Submodule <a name="`zeroTrustTunnelCloudflaredRoute` Submodule" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustTunnelCloudflaredRoute <a name="ZeroTrustTunnelCloudflaredRoute" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_tunnel_cloudflared_route cloudflare_zero_trust_tunnel_cloudflared_route}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrusttunnelcloudflaredroute"

zerotrusttunnelcloudflaredroute.NewZeroTrustTunnelCloudflaredRoute(scope Construct, id *string, config ZeroTrustTunnelCloudflaredRouteConfig) ZeroTrustTunnelCloudflaredRoute
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig">ZeroTrustTunnelCloudflaredRouteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig">ZeroTrustTunnelCloudflaredRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.resetVirtualNetworkId">ResetVirtualNetworkId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.resetComment"></a>

```go
func ResetComment()
```

##### `ResetVirtualNetworkId` <a name="ResetVirtualNetworkId" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.resetVirtualNetworkId"></a>

```go
func ResetVirtualNetworkId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustTunnelCloudflaredRoute resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrusttunnelcloudflaredroute"

zerotrusttunnelcloudflaredroute.ZeroTrustTunnelCloudflaredRoute_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrusttunnelcloudflaredroute"

zerotrusttunnelcloudflaredroute.ZeroTrustTunnelCloudflaredRoute_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrusttunnelcloudflaredroute"

zerotrusttunnelcloudflaredroute.ZeroTrustTunnelCloudflaredRoute_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrusttunnelcloudflaredroute"

zerotrusttunnelcloudflaredroute.ZeroTrustTunnelCloudflaredRoute_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ZeroTrustTunnelCloudflaredRoute resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ZeroTrustTunnelCloudflaredRoute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ZeroTrustTunnelCloudflaredRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_tunnel_cloudflared_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustTunnelCloudflaredRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.deletedAt">DeletedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.tunnelIdInput">TunnelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.tunnelId">TunnelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DeletedAt`<sup>Required</sup> <a name="DeletedAt" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.deletedAt"></a>

```go
func DeletedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `TunnelIdInput`<sup>Optional</sup> <a name="TunnelIdInput" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.tunnelIdInput"></a>

```go
func TunnelIdInput() *string
```

- *Type:* *string

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.virtualNetworkIdInput"></a>

```go
func VirtualNetworkIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.tunnelId"></a>

```go
func TunnelId() *string
```

- *Type:* *string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.virtualNetworkId"></a>

```go
func VirtualNetworkId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRoute.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustTunnelCloudflaredRouteConfig <a name="ZeroTrustTunnelCloudflaredRouteConfig" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/zerotrusttunnelcloudflaredroute"

&zerotrusttunnelcloudflaredroute.ZeroTrustTunnelCloudflaredRouteConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Network: *string,
	TunnelId: *string,
	Comment: *string,
	VirtualNetworkId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Cloudflare account ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.network">Network</a></code> | <code>*string</code> | The private IPv4 or IPv6 range connected by the route, in CIDR notation. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.tunnelId">TunnelId</a></code> | <code>*string</code> | UUID of the tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.comment">Comment</a></code> | <code>*string</code> | Optional remark describing the route. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | UUID of the virtual network. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_tunnel_cloudflared_route#account_id ZeroTrustTunnelCloudflaredRoute#account_id}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The private IPv4 or IPv6 range connected by the route, in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_tunnel_cloudflared_route#network ZeroTrustTunnelCloudflaredRoute#network}

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.tunnelId"></a>

```go
TunnelId *string
```

- *Type:* *string

UUID of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_tunnel_cloudflared_route#tunnel_id ZeroTrustTunnelCloudflaredRoute#tunnel_id}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Optional remark describing the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_tunnel_cloudflared_route#comment ZeroTrustTunnelCloudflaredRoute#comment}

---

##### `VirtualNetworkId`<sup>Optional</sup> <a name="VirtualNetworkId" id="@cdktn/provider-cloudflare.zeroTrustTunnelCloudflaredRoute.ZeroTrustTunnelCloudflaredRouteConfig.property.virtualNetworkId"></a>

```go
VirtualNetworkId *string
```

- *Type:* *string

UUID of the virtual network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/zero_trust_tunnel_cloudflared_route#virtual_network_id ZeroTrustTunnelCloudflaredRoute#virtual_network_id}

---




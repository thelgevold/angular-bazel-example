
import { Cmp5642Component } from './cmp';
describe('Cmp5642Component', () => {
  it('should add', () => {
    expect(new Cmp5642Component().add5642(1)).toBe(5643);
  });
});
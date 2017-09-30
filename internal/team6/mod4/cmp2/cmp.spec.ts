
import { Cmp8642Component } from './cmp';
describe('Cmp8642Component', () => {
  it('should add', () => {
    expect(new Cmp8642Component().add8642(1)).toBe(8643);
  });
});
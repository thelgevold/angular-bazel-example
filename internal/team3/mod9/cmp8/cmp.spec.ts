
import { Cmp8398Component } from './cmp';
describe('Cmp8398Component', () => {
  it('should add', () => {
    expect(new Cmp8398Component().add8398(1)).toBe(8399);
  });
});

import { Cmp8430Component } from './cmp';
describe('Cmp8430Component', () => {
  it('should add', () => {
    expect(new Cmp8430Component().add8430(1)).toBe(8431);
  });
});
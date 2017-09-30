
import { Cmp8412Component } from './cmp';
describe('Cmp8412Component', () => {
  it('should add', () => {
    expect(new Cmp8412Component().add8412(1)).toBe(8413);
  });
});

import { Cmp8709Component } from './cmp';
describe('Cmp8709Component', () => {
  it('should add', () => {
    expect(new Cmp8709Component().add8709(1)).toBe(8710);
  });
});
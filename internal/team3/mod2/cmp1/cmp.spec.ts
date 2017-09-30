
import { Cmp8321Component } from './cmp';
describe('Cmp8321Component', () => {
  it('should add', () => {
    expect(new Cmp8321Component().add8321(1)).toBe(8322);
  });
});
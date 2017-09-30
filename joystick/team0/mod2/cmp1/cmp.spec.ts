
import { Cmp9021Component } from './cmp';
describe('Cmp9021Component', () => {
  it('should add', () => {
    expect(new Cmp9021Component().add9021(1)).toBe(9022);
  });
});
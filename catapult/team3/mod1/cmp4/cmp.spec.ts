
import { Cmp2314Component } from './cmp';
describe('Cmp2314Component', () => {
  it('should add', () => {
    expect(new Cmp2314Component().add2314(1)).toBe(2315);
  });
});
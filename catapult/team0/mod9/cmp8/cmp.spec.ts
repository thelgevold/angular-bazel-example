
import { Cmp2098Component } from './cmp';
describe('Cmp2098Component', () => {
  it('should add', () => {
    expect(new Cmp2098Component().add2098(1)).toBe(2099);
  });
});

import { Cmp2021Component } from './cmp';
describe('Cmp2021Component', () => {
  it('should add', () => {
    expect(new Cmp2021Component().add2021(1)).toBe(2022);
  });
});
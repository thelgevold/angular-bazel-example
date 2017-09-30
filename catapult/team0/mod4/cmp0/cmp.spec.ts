
import { Cmp2040Component } from './cmp';
describe('Cmp2040Component', () => {
  it('should add', () => {
    expect(new Cmp2040Component().add2040(1)).toBe(2041);
  });
});
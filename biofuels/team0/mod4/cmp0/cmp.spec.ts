
import { Cmp1040Component } from './cmp';
describe('Cmp1040Component', () => {
  it('should add', () => {
    expect(new Cmp1040Component().add1040(1)).toBe(1041);
  });
});
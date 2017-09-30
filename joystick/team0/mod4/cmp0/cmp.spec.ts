
import { Cmp9040Component } from './cmp';
describe('Cmp9040Component', () => {
  it('should add', () => {
    expect(new Cmp9040Component().add9040(1)).toBe(9041);
  });
});
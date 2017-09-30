
import { Cmp7008Component } from './cmp';
describe('Cmp7008Component', () => {
  it('should add', () => {
    expect(new Cmp7008Component().add7008(1)).toBe(7009);
  });
});
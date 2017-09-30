
import { Cmp7314Component } from './cmp';
describe('Cmp7314Component', () => {
  it('should add', () => {
    expect(new Cmp7314Component().add7314(1)).toBe(7315);
  });
});
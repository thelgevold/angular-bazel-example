
import { Cmp7311Component } from './cmp';
describe('Cmp7311Component', () => {
  it('should add', () => {
    expect(new Cmp7311Component().add7311(1)).toBe(7312);
  });
});
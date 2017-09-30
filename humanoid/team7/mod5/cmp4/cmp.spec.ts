
import { Cmp7754Component } from './cmp';
describe('Cmp7754Component', () => {
  it('should add', () => {
    expect(new Cmp7754Component().add7754(1)).toBe(7755);
  });
});
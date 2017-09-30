
import { Cmp7079Component } from './cmp';
describe('Cmp7079Component', () => {
  it('should add', () => {
    expect(new Cmp7079Component().add7079(1)).toBe(7080);
  });
});
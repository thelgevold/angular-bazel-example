
import { Cmp7017Component } from './cmp';
describe('Cmp7017Component', () => {
  it('should add', () => {
    expect(new Cmp7017Component().add7017(1)).toBe(7018);
  });
});
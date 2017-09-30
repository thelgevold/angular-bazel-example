
import { Cmp7030Component } from './cmp';
describe('Cmp7030Component', () => {
  it('should add', () => {
    expect(new Cmp7030Component().add7030(1)).toBe(7031);
  });
});
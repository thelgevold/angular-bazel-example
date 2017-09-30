
import { Cmp7044Component } from './cmp';
describe('Cmp7044Component', () => {
  it('should add', () => {
    expect(new Cmp7044Component().add7044(1)).toBe(7045);
  });
});
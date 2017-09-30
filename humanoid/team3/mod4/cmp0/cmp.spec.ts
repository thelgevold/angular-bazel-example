
import { Cmp7340Component } from './cmp';
describe('Cmp7340Component', () => {
  it('should add', () => {
    expect(new Cmp7340Component().add7340(1)).toBe(7341);
  });
});
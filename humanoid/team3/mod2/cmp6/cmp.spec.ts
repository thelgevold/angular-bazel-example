
import { Cmp7326Component } from './cmp';
describe('Cmp7326Component', () => {
  it('should add', () => {
    expect(new Cmp7326Component().add7326(1)).toBe(7327);
  });
});
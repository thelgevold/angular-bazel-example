
import { Cmp3020Component } from './cmp';
describe('Cmp3020Component', () => {
  it('should add', () => {
    expect(new Cmp3020Component().add3020(1)).toBe(3021);
  });
});
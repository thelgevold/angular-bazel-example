
import { Cmp3208Component } from './cmp';
describe('Cmp3208Component', () => {
  it('should add', () => {
    expect(new Cmp3208Component().add3208(1)).toBe(3209);
  });
});
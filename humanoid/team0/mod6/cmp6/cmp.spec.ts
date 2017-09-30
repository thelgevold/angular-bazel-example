
import { Cmp7066Component } from './cmp';
describe('Cmp7066Component', () => {
  it('should add', () => {
    expect(new Cmp7066Component().add7066(1)).toBe(7067);
  });
});
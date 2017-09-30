
import { Cmp3050Component } from './cmp';
describe('Cmp3050Component', () => {
  it('should add', () => {
    expect(new Cmp3050Component().add3050(1)).toBe(3051);
  });
});
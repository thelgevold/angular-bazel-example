
import { Cmp3010Component } from './cmp';
describe('Cmp3010Component', () => {
  it('should add', () => {
    expect(new Cmp3010Component().add3010(1)).toBe(3011);
  });
});

import { Cmp3674Component } from './cmp';
describe('Cmp3674Component', () => {
  it('should add', () => {
    expect(new Cmp3674Component().add3674(1)).toBe(3675);
  });
});

import { Cmp3975Component } from './cmp';
describe('Cmp3975Component', () => {
  it('should add', () => {
    expect(new Cmp3975Component().add3975(1)).toBe(3976);
  });
});